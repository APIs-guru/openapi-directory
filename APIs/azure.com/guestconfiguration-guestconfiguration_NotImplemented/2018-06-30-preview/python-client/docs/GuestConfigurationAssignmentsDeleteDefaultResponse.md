# GuestConfigurationAssignmentsDeleteDefaultResponse

Error response of an operation failure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | Error message indicating why the operation failed. | [optional] 

## Example

```python
from openapi_client.models.guest_configuration_assignments_delete_default_response import GuestConfigurationAssignmentsDeleteDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GuestConfigurationAssignmentsDeleteDefaultResponse from a JSON string
guest_configuration_assignments_delete_default_response_instance = GuestConfigurationAssignmentsDeleteDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(GuestConfigurationAssignmentsDeleteDefaultResponse.to_json())

# convert the object into a dict
guest_configuration_assignments_delete_default_response_dict = guest_configuration_assignments_delete_default_response_instance.to_dict()
# create an instance of GuestConfigurationAssignmentsDeleteDefaultResponse from a dict
guest_configuration_assignments_delete_default_response_from_dict = GuestConfigurationAssignmentsDeleteDefaultResponse.from_dict(guest_configuration_assignments_delete_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


