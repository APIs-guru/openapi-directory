# ApiManagementServiceUpdateHostnameParameters

Parameters supplied to the UpdateHostname operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**delete** | **List[str]** | Hostnames types to delete. | [optional] 
**update** | [**List[HostnameConfigurationOld]**](HostnameConfigurationOld.md) | Hostnames to create or update. | [optional] 

## Example

```python
from openapi_client.models.api_management_service_update_hostname_parameters import ApiManagementServiceUpdateHostnameParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceUpdateHostnameParameters from a JSON string
api_management_service_update_hostname_parameters_instance = ApiManagementServiceUpdateHostnameParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceUpdateHostnameParameters.to_json())

# convert the object into a dict
api_management_service_update_hostname_parameters_dict = api_management_service_update_hostname_parameters_instance.to_dict()
# create an instance of ApiManagementServiceUpdateHostnameParameters from a dict
api_management_service_update_hostname_parameters_from_dict = ApiManagementServiceUpdateHostnameParameters.from_dict(api_management_service_update_hostname_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


