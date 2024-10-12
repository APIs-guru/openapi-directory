# LocationInfo

Detected entity location information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat_lng** | [**LatLng**](LatLng.md) |  | [optional] 

## Example

```python
from openapi_client.models.location_info import LocationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of LocationInfo from a JSON string
location_info_instance = LocationInfo.from_json(json)
# print the JSON string representation of the object
print(LocationInfo.to_json())

# convert the object into a dict
location_info_dict = location_info_instance.to_dict()
# create an instance of LocationInfo from a dict
location_info_from_dict = LocationInfo.from_dict(location_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


