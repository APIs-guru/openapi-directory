# ListAssignedLocationsResponse

Response message for AssignedLocationService.ListAssignedLocations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assigned_locations** | [**List[AssignedLocation]**](AssignedLocation.md) | The list of assigned locations. This list will be absent if empty. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the page_token field in the subsequent call to &#x60;ListAssignedLocations&#x60; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_assigned_locations_response import ListAssignedLocationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAssignedLocationsResponse from a JSON string
list_assigned_locations_response_instance = ListAssignedLocationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAssignedLocationsResponse.to_json())

# convert the object into a dict
list_assigned_locations_response_dict = list_assigned_locations_response_instance.to_dict()
# create an instance of ListAssignedLocationsResponse from a dict
list_assigned_locations_response_from_dict = ListAssignedLocationsResponse.from_dict(list_assigned_locations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


