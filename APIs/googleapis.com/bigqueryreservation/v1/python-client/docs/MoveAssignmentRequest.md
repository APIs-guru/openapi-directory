# MoveAssignmentRequest

The request for ReservationService.MoveAssignment. **Note**: \"bigquery.reservationAssignments.create\" permission is required on the destination_id. **Note**: \"bigquery.reservationAssignments.create\" and \"bigquery.reservationAssignments.delete\" permission are required on the related assignee.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignment_id** | **str** | The optional assignment ID. A new assignment name is generated if this field is empty. This field can contain only lowercase alphanumeric characters or dashes. Max length is 64 characters. | [optional] 
**destination_id** | **str** | The new reservation ID, e.g.: &#x60;projects/myotherproject/locations/US/reservations/team2-prod&#x60; | [optional] 

## Example

```python
from openapi_client.models.move_assignment_request import MoveAssignmentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveAssignmentRequest from a JSON string
move_assignment_request_instance = MoveAssignmentRequest.from_json(json)
# print the JSON string representation of the object
print(MoveAssignmentRequest.to_json())

# convert the object into a dict
move_assignment_request_dict = move_assignment_request_instance.to_dict()
# create an instance of MoveAssignmentRequest from a dict
move_assignment_request_from_dict = MoveAssignmentRequest.from_dict(move_assignment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


