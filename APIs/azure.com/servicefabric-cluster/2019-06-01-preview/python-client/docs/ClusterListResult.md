# ClusterListResult

Cluster list results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[Cluster]**](Cluster.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_list_result import ClusterListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterListResult from a JSON string
cluster_list_result_instance = ClusterListResult.from_json(json)
# print the JSON string representation of the object
print(ClusterListResult.to_json())

# convert the object into a dict
cluster_list_result_dict = cluster_list_result_instance.to_dict()
# create an instance of ClusterListResult from a dict
cluster_list_result_from_dict = ClusterListResult.from_dict(cluster_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


