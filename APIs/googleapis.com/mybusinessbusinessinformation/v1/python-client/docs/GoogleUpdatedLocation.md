# GoogleUpdatedLocation

Represents a location that was modified by Google.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diff_mask** | **str** | The fields that Google updated. | [optional] 
**location** | [**Location**](Location.md) |  | [optional] 
**pending_mask** | **str** | The fields that have pending edits that haven&#39;t yet been pushed to Maps and Search. | [optional] 

## Example

```python
from openapi_client.models.google_updated_location import GoogleUpdatedLocation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleUpdatedLocation from a JSON string
google_updated_location_instance = GoogleUpdatedLocation.from_json(json)
# print the JSON string representation of the object
print(GoogleUpdatedLocation.to_json())

# convert the object into a dict
google_updated_location_dict = google_updated_location_instance.to_dict()
# create an instance of GoogleUpdatedLocation from a dict
google_updated_location_from_dict = GoogleUpdatedLocation.from_dict(google_updated_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


