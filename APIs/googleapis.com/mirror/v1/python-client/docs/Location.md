# Location

A geographic location that can be associated with a timeline item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accuracy** | **float** | The accuracy of the location fix in meters. | [optional] 
**address** | **str** | The full address of the location. | [optional] 
**display_name** | **str** | The name to be displayed. This may be a business name or a user-defined place, such as \&quot;Home\&quot;. | [optional] 
**id** | **str** | The ID of the location. | [optional] 
**kind** | **str** | The type of resource. This is always mirror#location. | [optional] [default to 'mirror#location']
**latitude** | **float** | The latitude, in degrees. | [optional] 
**longitude** | **float** | The longitude, in degrees. | [optional] 
**timestamp** | **datetime** | The time at which this location was captured, formatted according to RFC 3339. | [optional] 

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


