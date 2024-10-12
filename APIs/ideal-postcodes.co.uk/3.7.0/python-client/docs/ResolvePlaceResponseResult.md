# ResolvePlaceResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_iso** | **str** |   3 letter country code (ISO 3166-1)  | 
**dataset** | **str** | Indicates the provenance of a place.    - &#x60;geonames&#x60; GeoNames place | 
**descriptive_name** | **str** | Longer form description of the place.  | 
**id** | **str** | Global unique internally generated identifier for a place | 
**language** | [**Language**](Language.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 
**name** | **str** | Place name  | 
**native** | [**PlaceNative**](PlaceNative.md) |  | [optional] 

## Example

```python
from openapi_client.models.resolve_place_response_result import ResolvePlaceResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResolvePlaceResponseResult from a JSON string
resolve_place_response_result_instance = ResolvePlaceResponseResult.from_json(json)
# print the JSON string representation of the object
print(ResolvePlaceResponseResult.to_json())

# convert the object into a dict
resolve_place_response_result_dict = resolve_place_response_result_instance.to_dict()
# create an instance of ResolvePlaceResponseResult from a dict
resolve_place_response_result_from_dict = ResolvePlaceResponseResult.from_dict(resolve_place_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


