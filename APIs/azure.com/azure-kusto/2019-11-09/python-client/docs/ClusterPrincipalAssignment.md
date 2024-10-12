# ClusterPrincipalAssignment

Class representing a cluster principal assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ClusterPrincipalProperties**](ClusterPrincipalProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cluster_principal_assignment import ClusterPrincipalAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of ClusterPrincipalAssignment from a JSON string
cluster_principal_assignment_instance = ClusterPrincipalAssignment.from_json(json)
# print the JSON string representation of the object
print(ClusterPrincipalAssignment.to_json())

# convert the object into a dict
cluster_principal_assignment_dict = cluster_principal_assignment_instance.to_dict()
# create an instance of ClusterPrincipalAssignment from a dict
cluster_principal_assignment_from_dict = ClusterPrincipalAssignment.from_dict(cluster_principal_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


