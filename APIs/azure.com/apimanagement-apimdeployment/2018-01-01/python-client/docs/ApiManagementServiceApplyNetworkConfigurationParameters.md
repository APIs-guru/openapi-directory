# ApiManagementServiceApplyNetworkConfigurationParameters

Parameter supplied to the Apply Network configuration operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the Api Management service to update for a multi-region service. For a service deployed in a single region, this parameter is not required. | [optional] 

## Example

```python
from openapi_client.models.api_management_service_apply_network_configuration_parameters import ApiManagementServiceApplyNetworkConfigurationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceApplyNetworkConfigurationParameters from a JSON string
api_management_service_apply_network_configuration_parameters_instance = ApiManagementServiceApplyNetworkConfigurationParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceApplyNetworkConfigurationParameters.to_json())

# convert the object into a dict
api_management_service_apply_network_configuration_parameters_dict = api_management_service_apply_network_configuration_parameters_instance.to_dict()
# create an instance of ApiManagementServiceApplyNetworkConfigurationParameters from a dict
api_management_service_apply_network_configuration_parameters_from_dict = ApiManagementServiceApplyNetworkConfigurationParameters.from_dict(api_management_service_apply_network_configuration_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


