# GeonamesPlace

Full GeoNames place specification

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin1_code** | **str** | Fipscode (subject to change to iso code) | 
**admin1_geonameid** | **int** | GeoName ID for first administrative area | 
**admin1_name** | **str** | Name of first administrative area | 
**admin2_code** | **str** | Code for the second administrative division | 
**admin2_geonameid** | **int** | GeoName ID for second administrative area | 
**admin2_name** | **str** | Name of second administrative area | 
**admin3_code** | **str** | Code for third level administrative division | 
**admin4_code** | **str** | Code for fourth level administrative division | 
**alternatenames** | [**List[GeonamesPlaceAllOfAlternatenames]**](GeonamesPlaceAllOfAlternatenames.md) | List of alternate ASCII names | 
**asciiname** | **str** | Place Name (ASCII) | 
**cc2** | [**List[GeonamesPlaceAllOfCc2]**](GeonamesPlaceAllOfCc2.md) | List of other countries codes mapping to this place | 
**country_code** | **str** | 2 Letter ISO country code | 
**dataset** | **str** |  | [optional] 
**dem** | **int** | Digital elevation model | 
**elevation** | **int** | Elevation in meters | 
**feature_class** | **str** | GeoNames single letter feature code | 
**feature_code** | **str** | Full GeoNames feature code (http://www.geonames.org/export/codes.html) | 
**geonameid** | **int** | Unique identifier for GeoNames place | 
**id** | **str** | Unique place ID | [optional] 
**latitude** | [**Latitude**](Latitude.md) |  | 
**longitude** | [**Longitude**](Longitude.md) |  | 
**modification_date** | **str** | Datetime format | 
**name** | **str** | Place name (UTF8) | 
**population** | **str** | Population at place. Represented as string as it could be a larger than a 32bit integer | 
**timezone** | **str** | The IANA timezone ID | 

## Example

```python
from openapi_client.models.geonames_place import GeonamesPlace

# TODO update the JSON string below
json = "{}"
# create an instance of GeonamesPlace from a JSON string
geonames_place_instance = GeonamesPlace.from_json(json)
# print the JSON string representation of the object
print(GeonamesPlace.to_json())

# convert the object into a dict
geonames_place_dict = geonames_place_instance.to_dict()
# create an instance of GeonamesPlace from a dict
geonames_place_from_dict = GeonamesPlace.from_dict(geonames_place_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


