# Token


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
**user** | [**NestedUser**](NestedUser.md) |  | 
**write_enabled** | **bool** | Permit create/update/delete operations using this key | [optional] 

## Example

```python
from openapi_client.models.token import Token

# TODO update the JSON string below
json = "{}"
# create an instance of Token from a JSON string
token_instance = Token.from_json(json)
# print the JSON string representation of the object
print(Token.to_json())

# convert the object into a dict
token_dict = token_instance.to_dict()
# create an instance of Token from a dict
token_from_dict = Token.from_dict(token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


