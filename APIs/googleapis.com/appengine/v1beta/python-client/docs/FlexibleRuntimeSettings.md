# FlexibleRuntimeSettings

Runtime settings for the App Engine flexible environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operating_system** | **str** | The operating system of the application runtime. | [optional] 
**runtime_version** | **str** | The runtime version of an App Engine flexible application. | [optional] 

## Example

```python
from openapi_client.models.flexible_runtime_settings import FlexibleRuntimeSettings

# TODO update the JSON string below
json = "{}"
# create an instance of FlexibleRuntimeSettings from a JSON string
flexible_runtime_settings_instance = FlexibleRuntimeSettings.from_json(json)
# print the JSON string representation of the object
print(FlexibleRuntimeSettings.to_json())

# convert the object into a dict
flexible_runtime_settings_dict = flexible_runtime_settings_instance.to_dict()
# create an instance of FlexibleRuntimeSettings from a dict
flexible_runtime_settings_from_dict = FlexibleRuntimeSettings.from_dict(flexible_runtime_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


