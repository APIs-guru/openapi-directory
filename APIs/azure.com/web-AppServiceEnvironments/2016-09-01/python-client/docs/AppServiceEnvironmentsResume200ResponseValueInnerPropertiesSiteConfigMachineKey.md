# AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey

MachineKey of an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**decryption** | **str** | Algorithm used for decryption. | [optional] 
**decryption_key** | **str** | Decryption key. | [optional] 
**validation** | **str** | MachineKey validation. | [optional] 
**validation_key** | **str** | Validation key. | [optional] 

## Example

```python
from openapi_client.models.app_service_environments_resume200_response_value_inner_properties_site_config_machine_key import AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey

# TODO update the JSON string below
json = "{}"
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey from a JSON string
app_service_environments_resume200_response_value_inner_properties_site_config_machine_key_instance = AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey.from_json(json)
# print the JSON string representation of the object
print(AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey.to_json())

# convert the object into a dict
app_service_environments_resume200_response_value_inner_properties_site_config_machine_key_dict = app_service_environments_resume200_response_value_inner_properties_site_config_machine_key_instance.to_dict()
# create an instance of AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey from a dict
app_service_environments_resume200_response_value_inner_properties_site_config_machine_key_from_dict = AppServiceEnvironmentsResume200ResponseValueInnerPropertiesSiteConfigMachineKey.from_dict(app_service_environments_resume200_response_value_inner_properties_site_config_machine_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


