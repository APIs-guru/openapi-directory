# AddActionAliasRequestConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.add_action_alias_request_config import AddActionAliasRequestConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AddActionAliasRequestConfig from a JSON string
add_action_alias_request_config_instance = AddActionAliasRequestConfig.from_json(json)
# print the JSON string representation of the object
print(AddActionAliasRequestConfig.to_json())

# convert the object into a dict
add_action_alias_request_config_dict = add_action_alias_request_config_instance.to_dict()
# create an instance of AddActionAliasRequestConfig from a dict
add_action_alias_request_config_from_dict = AddActionAliasRequestConfig.from_dict(add_action_alias_request_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


