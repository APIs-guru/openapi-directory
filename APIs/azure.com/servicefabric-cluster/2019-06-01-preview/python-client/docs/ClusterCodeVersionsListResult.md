# ClusterCodeVersionsListResult

The list results of the Service Fabric runtime versions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] 
**value** | [**List[ClusterCodeVersionsResult]**](ClusterCodeVersionsResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.cluster_code_versions_list_result import ClusterCodeVersionsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterCodeVersionsListResult from a JSON string
cluster_code_versions_list_result_instance = ClusterCodeVersionsListResult.from_json(json)
# print the JSON string representation of the object
print(ClusterCodeVersionsListResult.to_json())

# convert the object into a dict
cluster_code_versions_list_result_dict = cluster_code_versions_list_result_instance.to_dict()
# create an instance of ClusterCodeVersionsListResult from a dict
cluster_code_versions_list_result_from_dict = ClusterCodeVersionsListResult.from_dict(cluster_code_versions_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


