# ListOSPolicyAssignmentsResponse

A response message for listing all assignments under given parent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of OS policy assignments. | [optional] 
**os_policy_assignments** | [**List[OSPolicyAssignment]**](OSPolicyAssignment.md) | The list of assignments | [optional] 

## Example

```python
from openapi_client.models.list_os_policy_assignments_response import ListOSPolicyAssignmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOSPolicyAssignmentsResponse from a JSON string
list_os_policy_assignments_response_instance = ListOSPolicyAssignmentsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOSPolicyAssignmentsResponse.to_json())

# convert the object into a dict
list_os_policy_assignments_response_dict = list_os_policy_assignments_response_instance.to_dict()
# create an instance of ListOSPolicyAssignmentsResponse from a dict
list_os_policy_assignments_response_from_dict = ListOSPolicyAssignmentsResponse.from_dict(list_os_policy_assignments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


