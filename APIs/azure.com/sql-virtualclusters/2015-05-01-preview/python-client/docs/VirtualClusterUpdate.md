# VirtualClusterUpdate

An update request for an Azure SQL Database virtual cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VirtualClusterProperties**](VirtualClusterProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.virtual_cluster_update import VirtualClusterUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualClusterUpdate from a JSON string
virtual_cluster_update_instance = VirtualClusterUpdate.from_json(json)
# print the JSON string representation of the object
print(VirtualClusterUpdate.to_json())

# convert the object into a dict
virtual_cluster_update_dict = virtual_cluster_update_instance.to_dict()
# create an instance of VirtualClusterUpdate from a dict
virtual_cluster_update_from_dict = VirtualClusterUpdate.from_dict(virtual_cluster_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


