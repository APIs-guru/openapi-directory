# ResponseAddress

Address of activity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude of location. | [optional] 
**location_id** | **str** | Specifies the id of the location. | [optional] 
**lon** | **float** | Longitude of location. | [optional] 
**name** | **str** | Name of location. | [optional] 
**snapped_waypoint** | [**SnappedWaypoint**](SnappedWaypoint.md) |  | [optional] 
**street_hint** | **str** | Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up. | [optional] 

## Example

```python
from openapi_client.models.response_address import ResponseAddress

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseAddress from a JSON string
response_address_instance = ResponseAddress.from_json(json)
# print the JSON string representation of the object
print(ResponseAddress.to_json())

# convert the object into a dict
response_address_dict = response_address_instance.to_dict()
# create an instance of ResponseAddress from a dict
response_address_from_dict = ResponseAddress.from_dict(response_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


