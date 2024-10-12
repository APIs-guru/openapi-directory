# IotBaseModuleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_options** | **str** |  | [optional] 
**environment_variables** | **Dict[str, str]** |  | [optional] 
**module_name** | **str** |  | [optional] 
**properties_desired** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.iot_base_module_settings import IotBaseModuleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IotBaseModuleSettings from a JSON string
iot_base_module_settings_instance = IotBaseModuleSettings.from_json(json)
# print the JSON string representation of the object
print(IotBaseModuleSettings.to_json())

# convert the object into a dict
iot_base_module_settings_dict = iot_base_module_settings_instance.to_dict()
# create an instance of IotBaseModuleSettings from a dict
iot_base_module_settings_from_dict = IotBaseModuleSettings.from_dict(iot_base_module_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


