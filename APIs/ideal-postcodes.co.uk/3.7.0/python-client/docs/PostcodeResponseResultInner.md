# PostcodeResponseResultInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**administrative_county** | **str** | Not available for non-UK addresses | 
**building_name** | **str** | Not available for non-UK addresses | 
**building_number** | **str** | Not available for non-UK addresses | 
**country** | [**Country**](Country.md) |  | 
**country_iso** | [**CountryISO**](CountryISO.md) |  | 
**country_iso_2** | [**CountryISO2**](CountryISO2.md) |  | 
**county** | **str** | State or county name | 
**county_code** | **str** | Code abbreviation for state or county used in some countries. | 
**dataset** | [**Dataset**](Dataset.md) |  | 
**delivery_point_suffix** | **str** | Not available for non-UK addresses | 
**department_name** | **str** | Not available for non-UK addresses | 
**dependant_locality** | **str** | Not available for non-UK addresses | 
**dependant_thoroughfare** | **str** | Not available for non-UK addresses | 
**district** | **str** | Not available for non-UK addresses | 
**double_dependant_locality** | **str** | Not available for non-UK addresses | 
**eastings** | **str** | Not available for non-UK addresses | 
**id** | **str** | Global unique internally generated identifier for an address | 
**language** | [**Language**](Language.md) |  | 
**latitude** | [**Latitude**](Latitude.md) |  | 
**line_1** | **str** | First line of the address. Typically the building number and street name | 
**line_2** | **str** | Second line of the address. Can be blank | 
**line_3** | **str** | Third line of the address. Can also be blank | 
**longitude** | [**Longitude**](Longitude.md) |  | 
**northings** | **str** | Not available for non-UK addresses | 
**organisation_name** | **str** | Not available for non-UK addresses | 
**po_box** | **str** | Not available for non-UK addresses | 
**post_town** | **str** | The city, town or other primary locality  | 
**postal_county** | **str** | Not available for non-UK addresses | 
**postcode** | **str** | Represents the postal or zip code | 
**postcode_inward** | **str** | Not available for non-UK addresses | 
**postcode_outward** | **str** | Not available for non-UK addresses | 
**postcode_type** | **str** | Not available for non-UK addresses | 
**premise** | **str** | Not available for non-UK addresses | 
**su_organisation_indicator** | **str** | Not available for non-UK addresses | 
**sub_building_name** | **str** | Not available for non-UK addresses | 
**thoroughfare** | **str** | Not available for non-UK addresses | 
**traditional_county** | **str** | Not available for non-UK addresses | 
**udprn** | **str** | Not available for non-UK addresses. See &#x60;id&#x60; for address identifier | 
**umprn** | **str** | Not available for non-UK addresses. See &#x60;id&#x60; for address identifier | 
**uprn** | **str** | Not available for non-UK addresses. See &#x60;id&#x60; for address identifier | 
**ward** | **str** | Not available for non-UK addresses | 
**native** | [**GbrGlobalAddressNative**](GbrGlobalAddressNative.md) |  | 

## Example

```python
from openapi_client.models.postcode_response_result_inner import PostcodeResponseResultInner

# TODO update the JSON string below
json = "{}"
# create an instance of PostcodeResponseResultInner from a JSON string
postcode_response_result_inner_instance = PostcodeResponseResultInner.from_json(json)
# print the JSON string representation of the object
print(PostcodeResponseResultInner.to_json())

# convert the object into a dict
postcode_response_result_inner_dict = postcode_response_result_inner_instance.to_dict()
# create an instance of PostcodeResponseResultInner from a dict
postcode_response_result_inner_from_dict = PostcodeResponseResultInner.from_dict(postcode_response_result_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


