# DatabasePrincipalAssignmentCheckNameRequest

A principal assignment check name availability request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Principal Assignment resource name. | 
**type** | **str** | The type of resource, Microsoft.Kusto/clusters/databases/principalAssignments. | 

## Example

```python
from openapi_client.models.database_principal_assignment_check_name_request import DatabasePrincipalAssignmentCheckNameRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DatabasePrincipalAssignmentCheckNameRequest from a JSON string
database_principal_assignment_check_name_request_instance = DatabasePrincipalAssignmentCheckNameRequest.from_json(json)
# print the JSON string representation of the object
print(DatabasePrincipalAssignmentCheckNameRequest.to_json())

# convert the object into a dict
database_principal_assignment_check_name_request_dict = database_principal_assignment_check_name_request_instance.to_dict()
# create an instance of DatabasePrincipalAssignmentCheckNameRequest from a dict
database_principal_assignment_check_name_request_from_dict = DatabasePrincipalAssignmentCheckNameRequest.from_dict(database_principal_assignment_check_name_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


