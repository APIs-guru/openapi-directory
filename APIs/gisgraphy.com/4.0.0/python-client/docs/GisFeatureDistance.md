# GisFeatureDistance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adm1_code** | **str** | The internal code for the administrative division of level 1 | [optional] 
**adm1_name** | **str** | The name of the administrative division of level 1 | [optional] 
**adm2_code** | **str** | The internal code for the administrative division of level 2 | [optional] 
**adm2_name** | **str** | The name of the administrative division of level 2 | [optional] 
**adm3_code** | **str** | The internal code for the administrative division of level 3 | [optional] 
**adm3_name** | **str** | The name of the administrative division of level 3 | [optional] 
**adm4_code** | **str** | The internal code for the administrative division of level 4 | [optional] 
**adm4_name** | **str** | The name of the administrative division of level 4 | [optional] 
**adm5_code** | **str** | The internal code for the administrative division of level 5 | [optional] 
**adm5_name** | **str** | The name of the administrative division of level 5 | [optional] 
**amenity** | **str** | Informations on category of OpenStreetMap POIs | [optional] 
**area** | **float** | The area of the feature | [optional] 
**ascii_name** | **str** | The ASCII name of the feature | [optional] 
**capital_name** | **str** | The Capital of the country | [optional] 
**continent** | **str** | The continent the country belongs | [optional] 
**country_code** | **str** | The ISO 3166 country code | [optional] 
**country_flag_url** | **str** | The relative URL to get the country flag image | [optional] 
**currency_code** | **str** | The Currency code (ISO_4217) of the country | [optional] 
**currency_name** | **str** | The Currency name of the country | [optional] 
**distance** | **float** | The distance beetween the point and the gisFeature in meters | [optional] 
**elevation** | **int** | The elevation in meters | [optional] 
**equivalent_fips_code** | **str** | The fips Code of the country when no code are available | [optional] 
**feature_class** | **str** | The feature Class. | [optional] 
**feature_code** | **str** | The feature Code. | [optional] 
**feature_id** | **int** | A unique id that identify the feature | [optional] 
**fips_code** | **str** | The fips Code of the country | [optional] 
**fully_qualified_address** | **str** | NOT USED YET | [optional] 
**google_map_url** | **str** | The URL to get the location on Google Map | [optional] 
**gtopo30** | **int** | Average elevation of 30&#39;x30&#39; (ca 900mx900m) area in meters | [optional] 
**is_in** | **str** | Information of the city where the street / POI is (depends on openstreetmap &#39;is_in&#39; field), the city in general (only for placetype street) | [optional] 
**is_in_adm** | **str** | Information of the administration division where the street / POI is.  | [optional] 
**is_in_place** | **str** | Information of the place where the street / POI is (quarter, common place). Generally a place at a lower level than city | [optional] 
**is_in_zip** | **str** | Information of the zipcode where the street / POI is\&quot; | [optional] 
**iso3166_alpha2_code** | **str** | The iso 3166 Alpha 2 code of the country | [optional] 
**iso3166_alpha3_code** | **str** | The iso 3166 Alpha 3 code of the country | [optional] 
**iso3166_numeric_code** | **str** | The iso 3166 numeric code of the country | [optional] 
**lat** | **float** | The latitude (north-south) | [optional] 
**length** | **float** | length of the street | [optional] 
**level** | **int** | The level of the Administrative division (1-5) | [optional] 
**lng** | **float** | The longitude (east-West) | [optional] 
**name** | **str** | The name of the feature | [optional] 
**one_way** | **bool** | Wether the street is oneway or not | [optional] 
**openstreetmap_id** | **int** | the id of the openstreetmap element | [optional] 
**openstreetmap_map_url** | **str** | The URL to get the location on Openstreetmap Map | [optional] 
**phone_prefix** | **str** | The phone prefix of the country | [optional] 
**place_type** | **str** | The Type of Feature see faq | [optional] 
**population** | **int** | How many people lives in this feature | [optional] 
**postal_code_mask** | **str** | The mask that all postal code of the country matches | [optional] 
**postal_code_regex** | **str** | The regexp that all zipcode/postalcode of the country matches | [optional] 
**street_type** | **str** | the type of the street | [optional] 
**timezone** | **str** | The time zone (e.g : Europe/Paris) | [optional] 
**tld** | **str** | top-level domain name, (last part of an Internet domain name) of the country | [optional] 
**yahoo_map_url** | **str** | The URL to get the location on Yahoo Map | [optional] 
**zip_codes** | **List[str]** | The zipcodes (only for city and city subdivision), one node by zipcode | [optional] 

## Example

```python
from openapi_client.models.gis_feature_distance import GisFeatureDistance

# TODO update the JSON string below
json = "{}"
# create an instance of GisFeatureDistance from a JSON string
gis_feature_distance_instance = GisFeatureDistance.from_json(json)
# print the JSON string representation of the object
print(GisFeatureDistance.to_json())

# convert the object into a dict
gis_feature_distance_dict = gis_feature_distance_instance.to_dict()
# create an instance of GisFeatureDistance from a dict
gis_feature_distance_from_dict = GisFeatureDistance.from_dict(gis_feature_distance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


