# BulkEditAssignedLocationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_locations** | [**List[AssignedLocation]**](AssignedLocation.md) | The list of assigned locations that have been successfully created. This list will be absent if empty. | [optional] 

## Example

```python
from openapi_client.models.bulk_edit_assigned_locations_response import BulkEditAssignedLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkEditAssignedLocationsResponse from a JSON string
bulk_edit_assigned_locations_response_instance = BulkEditAssignedLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkEditAssignedLocationsResponse.to_json())

# convert the object into a dict
bulk_edit_assigned_locations_response_dict = bulk_edit_assigned_locations_response_instance.to_dict()
# create an instance of BulkEditAssignedLocationsResponse from a dict
bulk_edit_assigned_locations_response_from_dict = BulkEditAssignedLocationsResponse.from_dict(bulk_edit_assigned_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


