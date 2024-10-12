# ClusterPrincipalAssignmentListResult

The list Kusto cluster principal assignments operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ClusterPrincipalAssignment]**](ClusterPrincipalAssignment.md) | The list of Kusto cluster principal assignments. | [optional] 

## Example

```python
from openapi_client.models.cluster_principal_assignment_list_result import ClusterPrincipalAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPrincipalAssignmentListResult from a JSON string
cluster_principal_assignment_list_result_instance = ClusterPrincipalAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(ClusterPrincipalAssignmentListResult.to_json())

# convert the object into a dict
cluster_principal_assignment_list_result_dict = cluster_principal_assignment_list_result_instance.to_dict()
# create an instance of ClusterPrincipalAssignmentListResult from a dict
cluster_principal_assignment_list_result_from_dict = ClusterPrincipalAssignmentListResult.from_dict(cluster_principal_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


