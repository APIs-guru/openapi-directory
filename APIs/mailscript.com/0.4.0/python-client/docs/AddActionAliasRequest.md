# AddActionAliasRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AddActionAliasRequestConfig**](AddActionAliasRequestConfig.md) |  | 
**name** | **str** |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.add_action_alias_request import AddActionAliasRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionAliasRequest from a JSON string
add_action_alias_request_instance = AddActionAliasRequest.from_json(json)
# print the JSON string representation of the object
print(AddActionAliasRequest.to_json())

# convert the object into a dict
add_action_alias_request_dict = add_action_alias_request_instance.to_dict()
# create an instance of AddActionAliasRequest from a dict
add_action_alias_request_from_dict = AddActionAliasRequest.from_dict(add_action_alias_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


