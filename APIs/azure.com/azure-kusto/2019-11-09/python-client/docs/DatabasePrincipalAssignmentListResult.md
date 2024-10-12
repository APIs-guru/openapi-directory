# DatabasePrincipalAssignmentListResult

The list Kusto database principal assignments operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[DatabasePrincipalAssignment]**](DatabasePrincipalAssignment.md) | The list of Kusto database principal assignments. | [optional] 

## Example

```python
from openapi_client.models.database_principal_assignment_list_result import DatabasePrincipalAssignmentListResult

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipalAssignmentListResult from a JSON string
database_principal_assignment_list_result_instance = DatabasePrincipalAssignmentListResult.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipalAssignmentListResult.to_json())

# convert the object into a dict
database_principal_assignment_list_result_dict = database_principal_assignment_list_result_instance.to_dict()
# create an instance of DatabasePrincipalAssignmentListResult from a dict
database_principal_assignment_list_result_from_dict = DatabasePrincipalAssignmentListResult.from_dict(database_principal_assignment_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


