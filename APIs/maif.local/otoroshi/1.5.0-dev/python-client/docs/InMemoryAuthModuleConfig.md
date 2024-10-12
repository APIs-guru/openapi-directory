# InMemoryAuthModuleConfig

Settings to authenticate users using the in memory user store

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**desc** | **str** | Description of the config | 
**id** | **str** | Unique id of the config | 
**name** | **str** | Name of the config | 
**session_max_age** | **str** | Max age of the session | 
**type** | **str** | Type of settings. value is basic | 
**users** | [**List[InMemoryUser]**](InMemoryUser.md) | List of users | 

## Example

```python
from openapi_client.models.in_memory_auth_module_config import InMemoryAuthModuleConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InMemoryAuthModuleConfig from a JSON string
in_memory_auth_module_config_instance = InMemoryAuthModuleConfig.from_json(json)
# print the JSON string representation of the object
print(InMemoryAuthModuleConfig.to_json())

# convert the object into a dict
in_memory_auth_module_config_dict = in_memory_auth_module_config_instance.to_dict()
# create an instance of InMemoryAuthModuleConfig from a dict
in_memory_auth_module_config_from_dict = InMemoryAuthModuleConfig.from_dict(in_memory_auth_module_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


