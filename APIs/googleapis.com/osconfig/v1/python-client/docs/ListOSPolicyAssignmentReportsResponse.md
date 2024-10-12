# ListOSPolicyAssignmentReportsResponse

A response message for listing OS Policy assignment reports including the page of results and page token.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of OS policy assignment report objects. | [optional] 
**os_policy_assignment_reports** | [**List[OSPolicyAssignmentReport]**](OSPolicyAssignmentReport.md) | List of OS policy assignment reports. | [optional] 

## Example

```python
from openapi_client.models.list_os_policy_assignment_reports_response import ListOSPolicyAssignmentReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListOSPolicyAssignmentReportsResponse from a JSON string
list_os_policy_assignment_reports_response_instance = ListOSPolicyAssignmentReportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListOSPolicyAssignmentReportsResponse.to_json())

# convert the object into a dict
list_os_policy_assignment_reports_response_dict = list_os_policy_assignment_reports_response_instance.to_dict()
# create an instance of ListOSPolicyAssignmentReportsResponse from a dict
list_os_policy_assignment_reports_response_from_dict = ListOSPolicyAssignmentReportsResponse.from_dict(list_os_policy_assignment_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


