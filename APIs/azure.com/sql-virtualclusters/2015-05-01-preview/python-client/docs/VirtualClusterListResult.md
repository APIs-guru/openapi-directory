# VirtualClusterListResult

A list of virtual clusters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to retrieve next page of results. | [optional] [readonly] 
**value** | [**List[VirtualCluster]**](VirtualCluster.md) | Array of results. | [optional] [readonly] 

## Example

```python
from openapi_client.models.virtual_cluster_list_result import VirtualClusterListResult

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualClusterListResult from a JSON string
virtual_cluster_list_result_instance = VirtualClusterListResult.from_json(json)
# print the JSON string representation of the object
print(VirtualClusterListResult.to_json())

# convert the object into a dict
virtual_cluster_list_result_dict = virtual_cluster_list_result_instance.to_dict()
# create an instance of VirtualClusterListResult from a dict
virtual_cluster_list_result_from_dict = VirtualClusterListResult.from_dict(virtual_cluster_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


