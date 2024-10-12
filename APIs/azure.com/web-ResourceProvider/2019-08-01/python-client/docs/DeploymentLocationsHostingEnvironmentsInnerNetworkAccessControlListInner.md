# DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner

Network access control entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | Action object. | [optional] 
**description** | **str** | Description of network access control entry. | [optional] 
**order** | **int** | Order of precedence. | [optional] 
**remote_subnet** | **str** | Remote subnet. | [optional] 

## Example

```python
from openapi_client.models.deployment_locations_hosting_environments_inner_network_access_control_list_inner import DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner from a JSON string
deployment_locations_hosting_environments_inner_network_access_control_list_inner_instance = DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner.to_json())

# convert the object into a dict
deployment_locations_hosting_environments_inner_network_access_control_list_inner_dict = deployment_locations_hosting_environments_inner_network_access_control_list_inner_instance.to_dict()
# create an instance of DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner from a dict
deployment_locations_hosting_environments_inner_network_access_control_list_inner_from_dict = DeploymentLocationsHostingEnvironmentsInnerNetworkAccessControlListInner.from_dict(deployment_locations_hosting_environments_inner_network_access_control_list_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


