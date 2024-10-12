# SapDiscoveryResourceInstanceProperties

A set of properties only present for an instance type resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cluster_instances** | **List[str]** | Optional. A list of instance URIs that are part of a cluster with this one. | [optional] 
**virtual_hostname** | **str** | Optional. A virtual hostname of the instance if it has one. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_resource_instance_properties import SapDiscoveryResourceInstanceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryResourceInstanceProperties from a JSON string
sap_discovery_resource_instance_properties_instance = SapDiscoveryResourceInstanceProperties.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryResourceInstanceProperties.to_json())

# convert the object into a dict
sap_discovery_resource_instance_properties_dict = sap_discovery_resource_instance_properties_instance.to_dict()
# create an instance of SapDiscoveryResourceInstanceProperties from a dict
sap_discovery_resource_instance_properties_from_dict = SapDiscoveryResourceInstanceProperties.from_dict(sap_discovery_resource_instance_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


