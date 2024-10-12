# GoogleLocation

Represents a Location that is present on Google. This can be a location that has been claimed by the user, someone else, or could be unclaimed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | [**Location**](Location.md) |  | [optional] 
**name** | **str** | Resource name of this GoogleLocation, in the format &#x60;googleLocations/{googleLocationId}&#x60;. | [optional] 
**request_admin_rights_uri** | **str** | A URL that will redirect the user to the request admin rights UI. This field is only present if the location has already been claimed by any user, including the current user. | [optional] 

## Example

```python
from openapi_client.models.google_location import GoogleLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleLocation from a JSON string
google_location_instance = GoogleLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleLocation.to_json())

# convert the object into a dict
google_location_dict = google_location_instance.to_dict()
# create an instance of GoogleLocation from a dict
google_location_from_dict = GoogleLocation.from_dict(google_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


