# ManagedClusterListResult

The response from the List Managed Clusters operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of managed cluster results. | [optional] [readonly] 
**value** | [**List[ManagedCluster]**](ManagedCluster.md) | The list of managed clusters. | [optional] 

## Example

```python
from openapi_client.models.managed_cluster_list_result import ManagedClusterListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedClusterListResult from a JSON string
managed_cluster_list_result_instance = ManagedClusterListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedClusterListResult.to_json())

# convert the object into a dict
managed_cluster_list_result_dict = managed_cluster_list_result_instance.to_dict()
# create an instance of ManagedClusterListResult from a dict
managed_cluster_list_result_from_dict = ManagedClusterListResult.from_dict(managed_cluster_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


