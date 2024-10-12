# WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey

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
from openapi_client.models.web_apps_list200_response_value_inner_properties_site_config_machine_key import WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey from a JSON string
web_apps_list200_response_value_inner_properties_site_config_machine_key_instance = WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_properties_site_config_machine_key_dict = web_apps_list200_response_value_inner_properties_site_config_machine_key_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey from a dict
web_apps_list200_response_value_inner_properties_site_config_machine_key_from_dict = WebAppsList200ResponseValueInnerPropertiesSiteConfigMachineKey.from_dict(web_apps_list200_response_value_inner_properties_site_config_machine_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


