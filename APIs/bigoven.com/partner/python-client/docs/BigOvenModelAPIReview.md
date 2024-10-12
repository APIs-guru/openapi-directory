# BigOvenModelAPIReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_minutes** | **int** |  | [optional] 
**comment** | **str** |  | [optional] 
**creation_date** | **datetime** |  | [optional] 
**featured_reply** | [**BigOvenModelAPIReply**](BigOvenModelAPIReply.md) |  | [optional] 
**guid** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**parent_id** | **int** |  | [optional] 
**poster** | [**BigOvenModelAPIUserInfo**](BigOvenModelAPIUserInfo.md) |  | [optional] 
**replies** | [**List[BigOvenModelAPIReview]**](BigOvenModelAPIReview.md) |  | [optional] 
**reply_count** | **int** |  | [optional] 
**review_id** | **int** |  | [optional] 
**star_rating** | **float** |  | [optional] 
**total_minutes** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_review import BigOvenModelAPIReview

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIReview from a JSON string
big_oven_model_api_review_instance = BigOvenModelAPIReview.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIReview.to_json())

# convert the object into a dict
big_oven_model_api_review_dict = big_oven_model_api_review_instance.to_dict()
# create an instance of BigOvenModelAPIReview from a dict
big_oven_model_api_review_from_dict = BigOvenModelAPIReview.from_dict(big_oven_model_api_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


