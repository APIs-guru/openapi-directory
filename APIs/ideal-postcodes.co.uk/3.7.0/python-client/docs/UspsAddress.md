# UspsAddress

Standard USA Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_secondary_abbreviation** | **str** | A descriptive code used to identify the type of address secondary range information in the Address Secondary Range field.  This code may be useful in address matching, e.g., the secondary address numbers may indicate apartment, suite, or trailer numbers. | 
**base_alternate_code** | [**BaseAlternateCode**](BaseAlternateCode.md) |  | 
**building_or_firm_name** | **str** | The name of a company, building, apartment complex, shopping center, or other distinguishing secondary address information. This field is normally used with firm and highrise records but may also contain literals such as “Postmaster” or “United States Postal Service.” | 
**carrier_route_id** | **str** | A 4 character ID identifying the postal route for the address. The first character indicates the route type. Specifically: - \&quot;B\&quot; indicates PO Box - \&quot;H\&quot; indicates highway - \&quot;C\&quot; indicates city - \&quot;G\&quot; indicates general - \&quot;R\&quot; indicates rural | 
**carrier_route_rate_sortation** | **str** | Identifies where automation Carrier Route rates are available and where the commingling of automation and non-automation mail, including Enhanced Carrier Routes and 5-digit presort, on the same pallet or in the same container is allowed. | 
**city** | **str** | A valid city name for mailing purposes; appears in the last line of an address on a mail piece. | 
**city_abbreviation** | **str** | A standard 13-character abbreviation for a city/state name. This field is only used for names that are greater than 13 characters in length and have a city/state mailing name indicator of \&quot;Y.\&quot; If the field is longer than 13 characters and the city/state mailing name indicator is \&quot;N,\&quot; the field will be blank. | 
**city_state_mailing_name_indicator** | **str** | Specifies whether or not the city state name can be used as a last line of address on a mail piece. - \&quot;Y &#x3D; City/state name is a USPS-approved mailing name.\&quot; - \&quot;N &#x3D; City/state name is not approved for mailing purposes.\&quot; | 
**city_state_name_facility_code** | [**CityStateNameFacilityCode**](CityStateNameFacilityCode.md) |  | 
**congressional_district_number** | [**CongressionalDistrictNumber**](CongressionalDistrictNumber.md) |  | 
**country** | [**UspsCountry**](UspsCountry.md) |  | 
**country_iso** | [**UspsCountryIso**](UspsCountryIso.md) |  | 
**country_iso_2** | [**UspsCountryIso2**](UspsCountryIso2.md) |  | 
**county** | **str** | The name of the county or parish in which the 5-digit ZIP Code resides. If APO/FPO/DPO, then the county name will be blank. | 
**county_number** | [**CountyNumber**](CountyNumber.md) |  | 
**dataset** | [**UspsDataset**](UspsDataset.md) |  | 
**finance_number** | [**FinanceNumber**](FinanceNumber.md) |  | 
**government_building_indicator** | [**GovernmentBuildingIndicator**](GovernmentBuildingIndicator.md) |  | 
**id** | **str** | Global unique internally generated identifier for an address | 
**lacs_status_indicator** | [**LacsStatusIndicator**](LacsStatusIndicator.md) |  | 
**language** | [**UspsLanguage**](UspsLanguage.md) |  | 
**last_line** | **str** | Last line of the address comprising of city, state, zip code and zip+4 | 
**line_1** | **str** | The primary delivery line (usually the street address) of the address. | 
**line_2** | **str** | Secondary delivery line of the address. Typically populated if the first line is the firm or building name. | 
**municipality_city_state_key** | **str** | Municipality City State Key. Currently blank. | 
**plus_4_code** | **str** | 4 digit ZIP add-on code. | 
**preferred_city** | **str** | Field that contains the default preferred or alternate preferred last-line name for a ZIP Code. | 
**preferred_last_line_city_state_key** | **str** | In the Carrier Route, Five-Digit ZIP Code, Delivery Statistics, and ZIP + 4 products, an index to the City State product record that provides the preferred last-line name for this address range. In the City State product, the preferred last line city/state key contains the key value of a City State product record that has the default preferred or alternate preferred last-line key for a given ZIP Code. | 
**primary_number** | **str** | A house, rural route, contract box, or Post Office Box number. The numeric or alphanumeric component of an address preceding the street name. Often referred to as house number. | 
**record_type_code** | [**RecordTypeCode**](RecordTypeCode.md) |  | 
**secondary_number** | **str** | Number of the sub unit, apartment, suite etc | 
**state** | **str** | Full name of a state, U.S. territory, or armed forces ZIP Code designation. | 
**state_abbreviation** | **str** | A 2-character abbreviation for the name of a state, U.S. territory, or armed forces ZIP Code designation. If APO/FPO/DPO, then the state abbreviation will be “AA,” “AE,” or “AP.” | 
**street_name** | **str** | The official name of a street as assigned by a local governing authority. The Street Name field contains only the street name and does not include directionals (EAST, WEST, etc.) or suffixes (ST, DR, BLVD, etc.). This element may also contain literals, such as PO BOX, GENERAL DELIVERY, USS, PSC, or UNIT. | 
**street_post_directional_abbreviation** | **str** | A geographic direction that follows the street name. | 
**street_pre_directional_abbreviation** | **str** | A geographic direction that precedes the street name. | 
**street_suffix_abbreviation** | **str** | Code that is the standard USPS abbreviation for the trailing designator in a street address.  | 
**update_key_number** | **str** | Field that contains a number that uniquely identifies a record; used to identify the base record to which an add or delete transaction is being directed. The Update Key Number field is used only when applying transactions to the base file; it is not used in address matching and remains fixed for the life of the record. The field is alphanumeric and consists of the database segment code (V1, V2, W1, W2, X1, X2, Y1, Y2, Z1, or Z2) and eight characters containing an alphanumeric value ranging from 00000001 to AAAAAAAA. | 
**urbanization_city_state_key** | **str** | An index to the City State file that provides the urbanization name for this delivery range. | 
**zip_classification_code** | [**ZipClassificationCode**](ZipClassificationCode.md) |  | 
**zip_code** | **str** | A 5-digit code that identifies a specific geographic delivery area. ZIP Codes can represent an area within a state, or a single building or company that has a very high mail volume.  | 
**zip_plus_4_code** | **str** | Nine-digit code that identifies a small geographic delivery area that is serviceable by a single carrier; appears in the last line of the address on a mail piece. | 

## Example

```python
from openapi_client.models.usps_address import UspsAddress

# TODO update the JSON string below
json = "{}"
# create an instance of UspsAddress from a JSON string
usps_address_instance = UspsAddress.from_json(json)
# print the JSON string representation of the object
print(UspsAddress.to_json())

# convert the object into a dict
usps_address_dict = usps_address_instance.to_dict()
# create an instance of UspsAddress from a dict
usps_address_from_dict = UspsAddress.from_dict(usps_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


