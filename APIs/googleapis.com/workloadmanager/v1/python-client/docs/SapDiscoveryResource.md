# SapDiscoveryResource

Message describing a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_properties** | [**SapDiscoveryResourceInstanceProperties**](SapDiscoveryResourceInstanceProperties.md) |  | [optional] 
**related_resources** | **List[str]** | Optional. A list of resource URIs related to this resource. | [optional] 
**resource_kind** | **str** | Required. ComputeInstance, ComputeDisk, VPC, Bare Metal server, etc. | [optional] 
**resource_type** | **str** | Required. The type of this resource. | [optional] 
**resource_uri** | **str** | Required. URI of the resource, includes project, location, and name. | [optional] 
**update_time** | **str** | Required. Unix timestamp of when this resource last had its discovery data updated. | [optional] 

## Example

```python
from openapi_client.models.sap_discovery_resource import SapDiscoveryResource

# TODO update the JSON string below
json = "{}"
# create an instance of SapDiscoveryResource from a JSON string
sap_discovery_resource_instance = SapDiscoveryResource.from_json(json)
# print the JSON string representation of the object
print(SapDiscoveryResource.to_json())

# convert the object into a dict
sap_discovery_resource_dict = sap_discovery_resource_instance.to_dict()
# create an instance of SapDiscoveryResource from a dict
sap_discovery_resource_from_dict = SapDiscoveryResource.from_dict(sap_discovery_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


