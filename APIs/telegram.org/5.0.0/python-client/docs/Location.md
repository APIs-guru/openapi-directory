# Location

This object represents a point on the map.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**heading** | **int** | *Optional*. The direction in which user is moving, in degrees; 1-360. For active live locations only. | [optional] 
**horizontal_accuracy** | **float** | *Optional*. The radius of uncertainty for the location, measured in meters; 0-1500 | [optional] 
**latitude** | **float** | Latitude as defined by sender | 
**live_period** | **int** | *Optional*. Time relative to the message sending date, during which the location can be updated, in seconds. For active live locations only. | [optional] 
**longitude** | **float** | Longitude as defined by sender | 
**proximity_alert_radius** | **int** | *Optional*. Maximum distance for proximity alerts about approaching another chat member, in meters. For sent live locations only. | [optional] 

## Example

```python
from openapi_client.models.location import Location

# TODO update the JSON string below
json = "{}"
# create an instance of Location from a JSON string
location_instance = Location.from_json(json)
# print the JSON string representation of the object
print(Location.to_json())

# convert the object into a dict
location_dict = location_instance.to_dict()
# create an instance of Location from a dict
location_from_dict = Location.from_dict(location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


