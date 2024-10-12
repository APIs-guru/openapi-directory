# RuntimeAccessConfig

Specifies the login configuration for Runtime

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_type** | **str** | The type of access mode this instance. | [optional] 
**proxy_uri** | **str** | Output only. The proxy endpoint that is used to access the runtime. | [optional] [readonly] 
**runtime_owner** | **str** | The owner of this runtime after creation. Format: &#x60;alias@example.com&#x60; Currently supports one owner only. | [optional] 

## Example

```python
from openapi_client.models.runtime_access_config import RuntimeAccessConfig

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeAccessConfig from a JSON string
runtime_access_config_instance = RuntimeAccessConfig.from_json(json)
# print the JSON string representation of the object
print(RuntimeAccessConfig.to_json())

# convert the object into a dict
runtime_access_config_dict = runtime_access_config_instance.to_dict()
# create an instance of RuntimeAccessConfig from a dict
runtime_access_config_from_dict = RuntimeAccessConfig.from_dict(runtime_access_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


