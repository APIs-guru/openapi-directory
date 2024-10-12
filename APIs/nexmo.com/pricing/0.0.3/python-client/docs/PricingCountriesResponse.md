# PricingCountriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **str** | The number of countries retrieved. | [optional] 
**countries** | [**List[CountryObject]**](CountryObject.md) | A list of countries. | [optional] 

## Example

```python
from openapi_client.models.pricing_countries_response import PricingCountriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PricingCountriesResponse from a JSON string
pricing_countries_response_instance = PricingCountriesResponse.from_json(json)
# print the JSON string representation of the object
print(PricingCountriesResponse.to_json())

# convert the object into a dict
pricing_countries_response_dict = pricing_countries_response_instance.to_dict()
# create an instance of PricingCountriesResponse from a dict
pricing_countries_response_from_dict = PricingCountriesResponse.from_dict(pricing_countries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


