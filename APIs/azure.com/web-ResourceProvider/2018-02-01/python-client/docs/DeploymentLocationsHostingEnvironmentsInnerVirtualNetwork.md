# DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork

Specification for using a Virtual Network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Resource id of the Virtual Network. | [optional] 
**name** | **str** | Name of the Virtual Network (read-only). | [optional] [readonly] 
**subnet** | **str** | Subnet within the Virtual Network. | [optional] 
**type** | **str** | Resource type of the Virtual Network (read-only). | [optional] [readonly] 

## Example

```python
from openapi_client.models.deployment_locations_hosting_environments_inner_virtual_network import DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork from a JSON string
deployment_locations_hosting_environments_inner_virtual_network_instance = DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork.to_json())

# convert the object into a dict
deployment_locations_hosting_environments_inner_virtual_network_dict = deployment_locations_hosting_environments_inner_virtual_network_instance.to_dict()
# create an instance of DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork from a dict
deployment_locations_hosting_environments_inner_virtual_network_from_dict = DeploymentLocationsHostingEnvironmentsInnerVirtualNetwork.from_dict(deployment_locations_hosting_environments_inner_virtual_network_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


