# GeocodeReverseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The complete address using comma-separated values | 
**address_components** | **Dict[str, str]** | The components which make up the address such as road, city, state, etc | 
**city** | **str** | The city of the location | 
**country** | **str** | The country of the location | 
**country_code** | **str** | The ISO 2-letter country code of the location | 
**country_code3** | **str** | The ISO 3-letter country code of the location | 
**currency_code** | **str** | ISO 4217 currency code associated with the country | 
**found** | **bool** | True if these coordinates map to a real location | 
**latitude** | **float** | The location latitude | 
**location_tags** | **List[str]** | Array of strings containing any location tags associated with the address. Tags are additional pieces of metadata about a specific location, there are thousands of different tags. Some examples of tags: shop, office, cafe, bank, pub | 
**location_type** | **str** | The detected location type ordered roughly from most to least precise, possible values are: &lt;br&gt; &lt;ul&gt; &lt;li&gt;address - indicates a precise street address&lt;/li&gt; &lt;li&gt;street - accurate to the street level but may not point to the exact location of the house/building number&lt;/li&gt; &lt;li&gt;city - accurate to the city level, this includes villages, towns, suburbs, etc&lt;/li&gt; &lt;li&gt;postal-code - indicates a postal code area (no house or street information present)&lt;/li&gt; &lt;li&gt;railway - location is part of a rail network such as a station or railway track&lt;/li&gt; &lt;li&gt;natural - indicates a natural feature, for example a mountain peak or a waterway&lt;/li&gt; &lt;li&gt;island - location is an island or archipelago&lt;/li&gt; &lt;li&gt;administrative - indicates an administrative boundary such as a country, state or province&lt;/li&gt; &lt;/ul&gt; | 
**longitude** | **float** | The location longitude | 
**postal_address** | **str** | The formatted address using local standards suitable for printing on an envelope | 
**postal_code** | **str** | The postal code for the location | 
**region_code** | **str** | The ISO 3166-2 region code for the location | 
**state** | **str** | The state of the location | 
**timezone** | [**Dict[str, Timezone]**](Timezone.md) | Map containing timezone details for the location | 

## Example

```python
from openapi_client.models.geocode_reverse_response import GeocodeReverseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GeocodeReverseResponse from a JSON string
geocode_reverse_response_instance = GeocodeReverseResponse.from_json(json)
# print the JSON string representation of the object
print(GeocodeReverseResponse.to_json())

# convert the object into a dict
geocode_reverse_response_dict = geocode_reverse_response_instance.to_dict()
# create an instance of GeocodeReverseResponse from a dict
geocode_reverse_response_from_dict = GeocodeReverseResponse.from_dict(geocode_reverse_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


