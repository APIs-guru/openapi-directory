# RatingItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episo_date** | **str** |  | [optional] 
**imdb** | **str** |  | [optional] 
**meta_critics** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**rotten_tomatoes** | **str** |  | [optional] 
**rotten_tomatoes_audience_score** | **str** |  | [optional] 
**tvdb** | **str** |  | [optional] 
**tv_maze** | **str** |  | [optional] 
**trakt** | **str** |  | [optional] 
**imdb_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.rating_item import RatingItem

# TODO update the JSON string below
json = "{}"
# create an instance of RatingItem from a JSON string
rating_item_instance = RatingItem.from_json(json)
# print the JSON string representation of the object
print(RatingItem.to_json())

# convert the object into a dict
rating_item_dict = rating_item_instance.to_dict()
# create an instance of RatingItem from a dict
rating_item_from_dict = RatingItem.from_dict(rating_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


