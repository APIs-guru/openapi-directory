# Marker

Represents the last read position within a user's timelines.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**home** | **object** | Information about the user&#39;s position in the home timeline. | [optional] 
**last_read_id** | **str** | The ID of the most recently viewed entity. Cast from integer but not guaranteed to be a number | [optional] 
**notifications** | **object** | Information about the user&#39;s position in their notifications. | [optional] 
**updated_at** | **datetime** | The timestamp of when the marker was set. ISO 8601 Datetime. | [optional] 
**version** | **int** | Used for locking to prevent write conflicts. | [optional] 

## Example

```python
from openapi_client.models.marker import Marker

# TODO update the JSON string below
json = "{}"
# create an instance of Marker from a JSON string
marker_instance = Marker.from_json(json)
# print the JSON string representation of the object
print(Marker.to_json())

# convert the object into a dict
marker_dict = marker_instance.to_dict()
# create an instance of Marker from a dict
marker_from_dict = Marker.from_dict(marker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


