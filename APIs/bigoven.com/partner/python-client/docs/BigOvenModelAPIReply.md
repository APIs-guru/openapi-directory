# BigOvenModelAPIReply


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** |  | [optional] 
**creation_date** | **datetime** |  | [optional] 
**id** | **str** |  | [optional] 
**last_modified** | **datetime** |  | [optional] 
**poster** | [**BigOvenModelAPIUserInfoTiny**](BigOvenModelAPIUserInfoTiny.md) |  | [optional] 
**review_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_model_api_reply import BigOvenModelAPIReply

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenModelAPIReply from a JSON string
big_oven_model_api_reply_instance = BigOvenModelAPIReply.from_json(json)
# print the JSON string representation of the object
print(BigOvenModelAPIReply.to_json())

# convert the object into a dict
big_oven_model_api_reply_dict = big_oven_model_api_reply_instance.to_dict()
# create an instance of BigOvenModelAPIReply from a dict
big_oven_model_api_reply_from_dict = BigOvenModelAPIReply.from_dict(big_oven_model_api_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


