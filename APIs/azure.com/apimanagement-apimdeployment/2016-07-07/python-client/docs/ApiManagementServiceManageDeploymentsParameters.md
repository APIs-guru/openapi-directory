# ApiManagementServiceManageDeploymentsParameters

Parameters supplied to the ManageDeployments operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_locations** | [**List[AdditionalRegion]**](AdditionalRegion.md) | Additional data center locations for the API Management service. | [optional] 
**location** | **str** | Location of the API Management service Azure data center. | 
**sku_type** | **str** | SKU type of the API Management service. | 
**sku_unit_count** | **int** | SKU Unit count of the API Management service. Default value is 1. | [optional] [default to 1]
**vpn_configuration** | [**VirtualNetworkConfiguration**](VirtualNetworkConfiguration.md) |  | [optional] 
**vpn_type** | **str** | The type of VPN in which API Management service needs to be configured in. None (Default Value) means the API Management service is not part of any Virtual Network, External means the API Management deployment is set up inside a Virtual Network having an Internet Facing Endpoint, and Internal means that the API Management service deployment is set up inside a Virtual Network having an Intranet Facing Endpoint only. When vpnConfiguration is specified, vpnType must be specified. | [optional] [default to 'None']

## Example

```python
from openapi_client.models.api_management_service_manage_deployments_parameters import ApiManagementServiceManageDeploymentsParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApiManagementServiceManageDeploymentsParameters from a JSON string
api_management_service_manage_deployments_parameters_instance = ApiManagementServiceManageDeploymentsParameters.from_json(json)
# print the JSON string representation of the object
print(ApiManagementServiceManageDeploymentsParameters.to_json())

# convert the object into a dict
api_management_service_manage_deployments_parameters_dict = api_management_service_manage_deployments_parameters_instance.to_dict()
# create an instance of ApiManagementServiceManageDeploymentsParameters from a dict
api_management_service_manage_deployments_parameters_from_dict = ApiManagementServiceManageDeploymentsParameters.from_dict(api_management_service_manage_deployments_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


