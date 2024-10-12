# ScopeAssignment

The Managed Network resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScopeAssignmentProperties**](ScopeAssignmentProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**location** | **str** | The geo-location where the resource lives | [optional] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scope_assignment import ScopeAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of ScopeAssignment from a JSON string
scope_assignment_instance = ScopeAssignment.from_json(json)
# print the JSON string representation of the object
print(ScopeAssignment.to_json())

# convert the object into a dict
scope_assignment_dict = scope_assignment_instance.to_dict()
# create an instance of ScopeAssignment from a dict
scope_assignment_from_dict = ScopeAssignment.from_dict(scope_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


