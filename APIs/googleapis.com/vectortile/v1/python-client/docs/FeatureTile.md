# FeatureTile

A tile containing information about the map features located in the region it covers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coordinates** | [**TileCoordinates**](TileCoordinates.md) |  | [optional] 
**features** | [**List[Feature]**](Feature.md) | Features present on this map tile. | [optional] 
**name** | **str** | Resource name of the tile. The tile resource name is prefixed by its collection ID &#x60;tiles/&#x60; followed by the resource ID, which encodes the tile&#39;s global x and y coordinates and zoom level as &#x60;@,,z&#x60;. For example, &#x60;tiles/@1,2,3z&#x60;. | [optional] 
**providers** | [**List[ProviderInfo]**](ProviderInfo.md) | Data providers for the data contained in this tile. | [optional] 
**status** | **str** | Tile response status code to support tile caching. | [optional] 
**version_id** | **str** | An opaque value, usually less than 30 characters, that contains version info about this tile and the data that was used to generate it. The client should store this value in its tile cache and pass it back to the API in the client_tile_version_id field of subsequent tile requests in order to enable the API to detect when the new tile would be the same as the one the client already has in its cache. Also see STATUS_OK_DATA_UNCHANGED. | [optional] 

## Example

```python
from openapi_client.models.feature_tile import FeatureTile

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureTile from a JSON string
feature_tile_instance = FeatureTile.from_json(json)
# print the JSON string representation of the object
print(FeatureTile.to_json())

# convert the object into a dict
feature_tile_dict = feature_tile_instance.to_dict()
# create an instance of FeatureTile from a dict
feature_tile_from_dict = FeatureTile.from_dict(feature_tile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


