# WritableToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ips** | **List[object]** |  | [optional] [default to []]
**created** | **datetime** |  | [optional] [readonly] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**expires** | **datetime** |  | [optional] 
**id** | **int** |  | [optional] [readonly] 
**key** | **str** |  | [optional] 
**last_used** | **datetime** |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**user** | **int** |  | 
**write_enabled** | **bool** | Permit create/update/delete operations using this key | [optional] 

## Example

```python
from openapi_client.models.writable_token import WritableToken

# TODO update the JSON string below
json = "{}"
# create an instance of WritableToken from a JSON string
writable_token_instance = WritableToken.from_json(json)
# print the JSON string representation of the object
print(WritableToken.to_json())

# convert the object into a dict
writable_token_dict = writable_token_instance.to_dict()
# create an instance of WritableToken from a dict
writable_token_from_dict = WritableToken.from_dict(writable_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


