# ClusterPrincipalAssignmentCheckNameRequest

A principal assignment check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Principal Assignment resource name. | 
**type** | **str** | The type of resource, Microsoft.Kusto/clusters/principalAssignments. | 

## Example

```python
from openapi_client.models.cluster_principal_assignment_check_name_request import ClusterPrincipalAssignmentCheckNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPrincipalAssignmentCheckNameRequest from a JSON string
cluster_principal_assignment_check_name_request_instance = ClusterPrincipalAssignmentCheckNameRequest.from_json(json)
# print the JSON string representation of the object
print(ClusterPrincipalAssignmentCheckNameRequest.to_json())

# convert the object into a dict
cluster_principal_assignment_check_name_request_dict = cluster_principal_assignment_check_name_request_instance.to_dict()
# create an instance of ClusterPrincipalAssignmentCheckNameRequest from a dict
cluster_principal_assignment_check_name_request_from_dict = ClusterPrincipalAssignmentCheckNameRequest.from_dict(cluster_principal_assignment_check_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


