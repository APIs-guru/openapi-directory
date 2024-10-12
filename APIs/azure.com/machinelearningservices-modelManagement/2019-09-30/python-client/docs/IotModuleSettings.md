# IotModuleSettings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_options** | **str** |  | [optional] 
**environment_variables** | **Dict[str, str]** |  | [optional] 
**image_location** | **str** |  | [optional] 
**module_name** | **str** |  | [optional] 
**properties_desired** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.iot_module_settings import IotModuleSettings

# TODO update the JSON string below
json = "{}"
# create an instance of IotModuleSettings from a JSON string
iot_module_settings_instance = IotModuleSettings.from_json(json)
# print the JSON string representation of the object
print(IotModuleSettings.to_json())

# convert the object into a dict
iot_module_settings_dict = iot_module_settings_instance.to_dict()
# create an instance of IotModuleSettings from a dict
iot_module_settings_from_dict = IotModuleSettings.from_dict(iot_module_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


