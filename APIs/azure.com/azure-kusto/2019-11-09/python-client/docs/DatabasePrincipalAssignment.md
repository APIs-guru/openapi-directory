# DatabasePrincipalAssignment

Class representing a database principal assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DatabasePrincipalProperties**](DatabasePrincipalProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.database_principal_assignment import DatabasePrincipalAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipalAssignment from a JSON string
database_principal_assignment_instance = DatabasePrincipalAssignment.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipalAssignment.to_json())

# convert the object into a dict
database_principal_assignment_dict = database_principal_assignment_instance.to_dict()
# create an instance of DatabasePrincipalAssignment from a dict
database_principal_assignment_from_dict = DatabasePrincipalAssignment.from_dict(database_principal_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


