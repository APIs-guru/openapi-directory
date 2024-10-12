# VirtualClusterProperties

The properties of a virtual cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**child_resources** | **List[str]** | List of resources in this virtual cluster. | [optional] [readonly] 
**family** | **str** | If the service has different generations of hardware, for the same SKU, then that can be captured here. | [optional] 
**subnet_id** | **str** | Subnet resource ID for the virtual cluster. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_cluster_properties import VirtualClusterProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualClusterProperties from a JSON string
virtual_cluster_properties_instance = VirtualClusterProperties.from_json(json)
# print the JSON string representation of the object
print(VirtualClusterProperties.to_json())

# convert the object into a dict
virtual_cluster_properties_dict = virtual_cluster_properties_instance.to_dict()
# create an instance of VirtualClusterProperties from a dict
virtual_cluster_properties_from_dict = VirtualClusterProperties.from_dict(virtual_cluster_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


