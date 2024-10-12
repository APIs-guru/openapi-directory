# ServiceAuthenticationConfigurationInfo

Authentication configuration information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audience** | **str** | The audience url for the service | [optional] 
**authority** | **str** | The authority url for the service | [optional] 
**smart_proxy_enabled** | **bool** | If the SMART on FHIR proxy is enabled | [optional] 

## Example

```python
from openapi_client.models.service_authentication_configuration_info import ServiceAuthenticationConfigurationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceAuthenticationConfigurationInfo from a JSON string
service_authentication_configuration_info_instance = ServiceAuthenticationConfigurationInfo.from_json(json)
# print the JSON string representation of the object
print(ServiceAuthenticationConfigurationInfo.to_json())

# convert the object into a dict
service_authentication_configuration_info_dict = service_authentication_configuration_info_instance.to_dict()
# create an instance of ServiceAuthenticationConfigurationInfo from a dict
service_authentication_configuration_info_from_dict = ServiceAuthenticationConfigurationInfo.from_dict(service_authentication_configuration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


