# ListOSPolicyAssignmentRevisionsResponse

A response message for listing all revisions for a OS policy assignment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of OS policy assignment revisions. | [optional] 
**os_policy_assignments** | [**List[OSPolicyAssignment]**](OSPolicyAssignment.md) | The OS policy assignment revisions | [optional] 

## Example

```python
from openapi_client.models.list_os_policy_assignment_revisions_response import ListOSPolicyAssignmentRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOSPolicyAssignmentRevisionsResponse from a JSON string
list_os_policy_assignment_revisions_response_instance = ListOSPolicyAssignmentRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOSPolicyAssignmentRevisionsResponse.to_json())

# convert the object into a dict
list_os_policy_assignment_revisions_response_dict = list_os_policy_assignment_revisions_response_instance.to_dict()
# create an instance of ListOSPolicyAssignmentRevisionsResponse from a dict
list_os_policy_assignment_revisions_response_from_dict = ListOSPolicyAssignmentRevisionsResponse.from_dict(list_os_policy_assignment_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


