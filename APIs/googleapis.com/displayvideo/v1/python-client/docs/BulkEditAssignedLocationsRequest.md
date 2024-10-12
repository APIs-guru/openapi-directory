# BulkEditAssignedLocationsRequest

Request message for AssignedLocationService.BulkEditAssignedLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_assigned_locations** | [**List[AssignedLocation]**](AssignedLocation.md) | The assigned locations to create in bulk, specified as a list of AssignedLocation resources. | [optional] 
**deleted_assigned_locations** | **List[str]** | The IDs of the assigned locations to delete in bulk, specified as a list of assignedLocationId values. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_locations_request import BulkEditAssignedLocationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedLocationsRequest from a JSON string
bulk_edit_assigned_locations_request_instance = BulkEditAssignedLocationsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedLocationsRequest.to_json())

# convert the object into a dict
bulk_edit_assigned_locations_request_dict = bulk_edit_assigned_locations_request_instance.to_dict()
# create an instance of BulkEditAssignedLocationsRequest from a dict
bulk_edit_assigned_locations_request_from_dict = BulkEditAssignedLocationsRequest.from_dict(bulk_edit_assigned_locations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


