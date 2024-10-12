# DenyAssignmentFilter

Deny Assignments filter

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deny_assignment_name** | **str** | Return deny assignment with specified name. | [optional] 
**gdpr_export_principal_id** | **str** | Return all deny assignments where the specified principal is listed either in the principals list or exclude principals list of deny assignments. | [optional] 
**principal_id** | **str** | Return all deny assignments where the specified principal is listed in the principals list of deny assignments. | [optional] 

## Example

```python
from openapi_client.models.deny_assignment_filter import DenyAssignmentFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DenyAssignmentFilter from a JSON string
deny_assignment_filter_instance = DenyAssignmentFilter.from_json(json)
# print the JSON string representation of the object
print(DenyAssignmentFilter.to_json())

# convert the object into a dict
deny_assignment_filter_dict = deny_assignment_filter_instance.to_dict()
# create an instance of DenyAssignmentFilter from a dict
deny_assignment_filter_from_dict = DenyAssignmentFilter.from_dict(deny_assignment_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


