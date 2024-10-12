# DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner

Virtual IP mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**in_use** | **bool** | Is virtual IP mapping in use. | [optional] 
**internal_http_port** | **int** | Internal HTTP port. | [optional] 
**internal_https_port** | **int** | Internal HTTPS port. | [optional] 
**virtual_ip** | **str** | Virtual IP address. | [optional] 

## Example

```python
from openapi_client.models.deployment_locations_hosting_environments_inner_vip_mappings_inner import DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner from a JSON string
deployment_locations_hosting_environments_inner_vip_mappings_inner_instance = DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner.from_json(json)
# print the JSON string representation of the object
print(DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner.to_json())

# convert the object into a dict
deployment_locations_hosting_environments_inner_vip_mappings_inner_dict = deployment_locations_hosting_environments_inner_vip_mappings_inner_instance.to_dict()
# create an instance of DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner from a dict
deployment_locations_hosting_environments_inner_vip_mappings_inner_from_dict = DeploymentLocationsHostingEnvironmentsInnerVipMappingsInner.from_dict(deployment_locations_hosting_environments_inner_vip_mappings_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


