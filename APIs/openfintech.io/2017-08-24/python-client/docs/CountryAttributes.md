# CountryAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**area** | **str** | Countryâ€™s area (sq km) | [optional] 
**calling_codes** | **List[int]** | Array of country&#x60;s phone codes | [optional] 
**capital** | **str** | Countryâ€™s capital | [optional] 
**code_alpha3** | **str** | Country&#x60;s ISO alpha3 code | [optional] 
**languages** | **List[str]** | Array of country&#x60;s languages | [optional] 
**name** | **str** | Country&#x60;s name | [optional] 
**native_name** | **str** | Country&#x60;s nativ name | [optional] 
**population** | **str** | Countryâ€™s population | [optional] 
**region** | **str** | Countryâ€™s region:&lt;br&gt;    * Africa   * Americas   * Asia   * Europe   * Oceania   * Polar  | [optional] 
**sub_region** | **str** | Countryâ€™s sub region:&lt;br&gt;    * Northern Africa   * Southern Africa   * Western Africa   * Eastern Africa   * Middle Africa   * Northern America   * South America   * Central America   * Caribbean   * Southern Asia   * Western Asia   * Eastern Asia   * South-Eastern Asia   * Central Asia   * Northern Europe   * Southern Europe   * Western Europe   * Eastern Europe   * Polynesia   * Australia and New Zealand   * Micronesia   * Melanesia  | [optional] 
**timezones** | **List[str]** | Array of country&#x60;s timezones (UTC) | [optional] 
**top_level_domains** | **List[str]** | Array of country&#x60;s domains | [optional] 

## Example

```python
from openapi_client.models.country_attributes import CountryAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CountryAttributes from a JSON string
country_attributes_instance = CountryAttributes.from_json(json)
# print the JSON string representation of the object
print(CountryAttributes.to_json())

# convert the object into a dict
country_attributes_dict = country_attributes_instance.to_dict()
# create an instance of CountryAttributes from a dict
country_attributes_from_dict = CountryAttributes.from_dict(country_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


