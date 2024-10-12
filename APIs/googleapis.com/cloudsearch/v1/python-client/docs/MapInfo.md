# MapInfo

Geo information used for rendering a map that shows the user's work location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lat** | **float** | Latitude in degrees | [optional] 
**location_url** | [**SafeUrlProto**](SafeUrlProto.md) |  | [optional] 
**long** | **float** | Longitude in degrees | [optional] 
**map_tile** | [**List[MapTile]**](MapTile.md) | MapTiles for the area around a user&#39;s work location | [optional] 
**zoom** | **int** | The zoom level of the map. A constant zoom value of 18 is used for now to match the zoom of the map shown on a Moma Teams Profile page | [optional] 

## Example

```python
from openapi_client.models.map_info import MapInfo

# TODO update the JSON string below
json = "{}"
# create an instance of MapInfo from a JSON string
map_info_instance = MapInfo.from_json(json)
# print the JSON string representation of the object
print(MapInfo.to_json())

# convert the object into a dict
map_info_dict = map_info_instance.to_dict()
# create an instance of MapInfo from a dict
map_info_from_dict = MapInfo.from_dict(map_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


