# SolrResponseDto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adm1_code** | **str** | The internal code for the administrative division of level 1 | [optional] 
**adm1_name** | **str** | The name of the administrative division of level 1 | [optional] 
**adm1_names_alternate** | **List[str]** | The alternate names of the administrative division of level 1 without specific language code | [optional] 
**adm2_code** | **str** | The internal code for the administrative division of level 2 | [optional] 
**adm2_name** | **str** | The name of the administrative division of level 2 | [optional] 
**adm2_names_alternate** | **List[str]** | The alternate names of the administrative division of level 2 without specific language code | [optional] 
**adm3_code** | **str** | The internal code for the administrative division of level 3 | [optional] 
**adm3_name** | **str** | The name of the administrative division of level 3 | [optional] 
**adm4_code** | **str** | The internal code for the administrative division of level 4 | [optional] 
**adm4_name** | **str** | The name of the administrative division of level 4 | [optional] 
**amenity** | **str** | Informations on category of OpenStreetMap POIs | [optional] 
**area** | **float** | Area of the country in m² (only for country placetype) | [optional] 
**capital_name** | **str** | Name of the capital of the country(only for country placetype) | [optional] 
**continent** | **str** | The continent the country belongs (only for country placetype) | [optional] 
**country_code** | **str** | The ISO 3166 country code | [optional] 
**country_flag_url** | **str** | The relative URL to get the country flag image | [optional] 
**country_name** | **str** | The name of the country the features belongs to | [optional] 
**country_names_alternate** | **List[str]** | The alternate names of the country without specific language code | [optional] 
**currency_code** | **str** | The ISO 4217 Currency from the curencycode (only for country placetype) | [optional] 
**currency_name** | **str** | The name of the currency of the country (only for country placetype) | [optional] 
**elevation** | **int** | Elevation in meters | [optional] 
**feature_class** | **str** | The feature Class. | [optional] 
**feature_code** | **str** | The feature Code. | [optional] 
**feature_id** | **int** | A unique id that identify the feature | [optional] 
**fips_code** | **str** | The FIPS Code of the country (only for country placetype) | [optional] 
**fully_qualified_address** | **str** | NOT USED YET | [optional] 
**fully_qualified_name** | **str** | A name of the form : (adm1Name et adm2Name are printed) Paris, Département de Ville-De-Paris, Ile-De-France, (FR) | [optional] 
**google_map_url** | **str** | The URL to get the location on Google Map | [optional] 
**gtopo30** | **int** | Average elevation of 30&#39;x30&#39; (ca 900mx900m) area in meters | [optional] 
**house_numbers** | [**List[HouseNumberDto]**](HouseNumberDto.md) | a list of all the house numbers sorted and their coordinates (only for placetype street) | [optional] 
**is_in** | **str** | Information on the city where the street / POI is (depends on OpenStreetMap &#39;is_in&#39; field), the city in general (only for placetype street) | [optional] 
**is_in_adm** | **str** | Information of the administration division where the street / POI is. | [optional] 
**is_in_place** | **str** | Information on the place where the street / POI is (quater, common place). Generally a place at a lower level than city | [optional] 
**is_in_zip** | **List[str]** | Information of the zipcode where the street / POI is (often fill for placetype street) | [optional] 
**isoalpha2_country_code** | **str** | The ISO 3166 alpha 2 code of the country (only for country placetype) | [optional] 
**isoalpha3_country_code** | **str** | The ISO 3166 alpha 3 code of the country (only for country placetype) | [optional] 
**lat** | **float** | The latitude (north-south) | [optional] 
**length** | **float** | The length of the street (only for placetype street) | [optional] 
**level** | **int** | Level of the Adm 1 , 2, 3, or 4(only for Adm placetype) | [optional] 
**lng** | **float** | The longitude (east-West) | [optional] 
**municipality** | **bool** | if the place is a municipality. it is usefull for geonames feature that don&#39;t have concept of &#39;city&#39; but a populated place (that can be a quarter) | [optional] 
**name** | **str** | The name of the feature | [optional] 
**name_alternates** | **List[str]** | The alternate names of the feature that without specific language code | [optional] 
**name_ascii** | **str** | The ASCII name | [optional] 
**one_way** | **bool** | whether the street is one way or not (only for placetype street) | [optional] 
**openstreetmap_id** | **int** | The OpenStreetMap unique id of the street (only for placetype street) | [optional] 
**openstreetmap_map_url** | **str** | The URL to get the location on OpenStreetMap.org | [optional] 
**phone_prefix** | **str** | The phone prefix of the country. e.g : +33 .(only for country placetype) | [optional] 
**placetype** | **str** | The place Type of the Feature | [optional] 
**population** | **int** | How many people live in this feature | [optional] 
**postal_code_mask** | **str** | The mask that postal codes should verify. e.g : ##### (only for country placetype) | [optional] 
**postal_code_regex** | **str** | The regular expression that postal codes should verify (only for country placetype) | [optional] 
**score** | **float** | a number that indicates the relevance of the result | [optional] 
**spoken_languages** | **List[str]** | List of languages spoken in the country (only for country placetype) | [optional] 
**street_type** | **str** | The type of the street (only for placetype street) | [optional] 
**timezone** | **str** | The timezone (e.g :Europe/Paris). | [optional] 
**tld** | **str** | Top level domain of the country (only for country placetype) | [optional] 
**yahoo_map_url** | **str** | The URL to get the location on Yahoo Map | [optional] 
**zipcodes** | **List[str]** | The zipcodes | [optional] 

## Example

```python
from openapi_client.models.solr_response_dto import SolrResponseDto

# TODO update the JSON string below
json = "{}"
# create an instance of SolrResponseDto from a JSON string
solr_response_dto_instance = SolrResponseDto.from_json(json)
# print the JSON string representation of the object
print(SolrResponseDto.to_json())

# convert the object into a dict
solr_response_dto_dict = solr_response_dto_instance.to_dict()
# create an instance of SolrResponseDto from a dict
solr_response_dto_from_dict = SolrResponseDto.from_dict(solr_response_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


