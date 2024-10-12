# UsaGlobalAddress

Global (non-US) Address in the US address format

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_secondary_abbreviation** | **str** | Not available for non-US addresses | 
**base_alternate_code** | **str** | Not available for non-US addresses | 
**building_or_firm_name** | **str** | Not available for non-US addresses | 
**carrier_route_id** | **str** | Not available for non-US addresses | 
**carrier_route_rate_sortation** | **str** | Not available for non-US addresses | 
**city** | **str** | City name | 
**city_abbreviation** | **str** | City name abbreviation (if available) | 
**city_state_mailing_name_indicator** | **str** | Not available for non-US addresses | 
**city_state_name_facility_code** | **str** | Not available for non-US addresses | 
**congressional_district_number** | **str** | Not available for non-US addresses | 
**country** | [**Country**](Country.md) |  | 
**country_iso** | [**CountryISO**](CountryISO.md) |  | 
**country_iso_2** | [**CountryISO2**](CountryISO2.md) |  | 
**county** | **str** | County name | 
**county_number** | **str** | Not available for non-US addresses | 
**dataset** | [**Dataset**](Dataset.md) |  | 
**finance_number** | **str** | Not available for non-US addresses | 
**government_building_indicator** | **str** | Not available for non-US addresses | 
**id** | **str** | Global unique internally generated identifier for an address | 
**lacs_status_indicator** | **str** | Not available for non-US addresses | 
**language** | [**Language**](Language.md) |  | 
**last_line** | **str** | Not available for non-US addresses | 
**line_1** | **str** | First line of address | 
**line_2** | **str** | Second line of address | 
**municipality_city_state_key** | **str** | Not available for non-US addresses | 
**native** | [**UsaGlobalAddressNative**](UsaGlobalAddressNative.md) |  | 
**plus_4_code** | **str** | Not available for non-US addresses | 
**preferred_city** | **str** | Not available for non-US addresses | 
**preferred_last_line_city_state_key** | **str** | Not available for non-US addresses | 
**primary_number** | **str** | Not available for non-US addresses | 
**record_type_code** | **str** | Not available for non-US addresses | 
**secondary_number** | **str** | Not available for non-US addresses | 
**state** | **str** | State or province | 
**state_abbreviation** | **str** | Code of state or province (if available) | 
**street_name** | **str** | Not available for non-US addresses | 
**street_post_directional_abbreviation** | **str** | Not available for non-US addresses | 
**street_pre_directional_abbreviation** | **str** | Not available for non-US addresses | 
**street_suffix_abbreviation** | **str** | Not available for non-US addresses | 
**update_key_number** | **str** | Not available for non-US addresses | 
**urbanization_city_state_key** | **str** | Not available for non-US addresses | 
**zip_classification_code** | **str** | Not available for non-US addresses | 
**zip_code** | **str** | Partial postcode of address | 
**zip_plus_4_code** | **str** | Full postal code of address | 

## Example

```python
from openapi_client.models.usa_global_address import UsaGlobalAddress

# TODO update the JSON string below
json = "{}"
# create an instance of UsaGlobalAddress from a JSON string
usa_global_address_instance = UsaGlobalAddress.from_json(json)
# print the JSON string representation of the object
print(UsaGlobalAddress.to_json())

# convert the object into a dict
usa_global_address_dict = usa_global_address_instance.to_dict()
# create an instance of UsaGlobalAddress from a dict
usa_global_address_from_dict = UsaGlobalAddress.from_dict(usa_global_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


