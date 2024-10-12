# GeoTargeting

Geographical Targeting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cities** | [**List[City]**](City.md) | Cities to be targeted. For each city only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a city, do not target or exclude the country of the city, and do not target the metro or region of the city. | [optional] 
**countries** | [**List[Country]**](Country.md) | Countries to be targeted or excluded from targeting, depending on the setting of the excludeCountries field. For each country only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting or excluding a country, do not target regions, cities, metros, or postal codes in the same country. | [optional] 
**exclude_countries** | **bool** | Whether or not to exclude the countries in the countries field from targeting. If false, the countries field refers to countries which will be targeted by the ad. | [optional] 
**metros** | [**List[Metro]**](Metro.md) | Metros to be targeted. For each metro only dmaId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a metro, do not target or exclude the country of the metro. | [optional] 
**postal_codes** | [**List[PostalCode]**](PostalCode.md) | Postal codes to be targeted. For each postal code only id is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a postal code, do not target or exclude the country of the postal code. | [optional] 
**regions** | [**List[Region]**](Region.md) | Regions to be targeted. For each region only dartId is required. The other fields are populated automatically when the ad is inserted or updated. If targeting a region, do not target or exclude the country of the region. | [optional] 

## Example

```python
from openapi_client.models.geo_targeting import GeoTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of GeoTargeting from a JSON string
geo_targeting_instance = GeoTargeting.from_json(json)
# print the JSON string representation of the object
print(GeoTargeting.to_json())

# convert the object into a dict
geo_targeting_dict = geo_targeting_instance.to_dict()
# create an instance of GeoTargeting from a dict
geo_targeting_from_dict = GeoTargeting.from_dict(geo_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


