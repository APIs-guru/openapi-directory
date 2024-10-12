# CountriesListResponse

Country List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**List[Country]**](Country.md) | Country collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#countriesListResponse\&quot;. | [optional] 

## Example

```python
from openapi_client.models.countries_list_response import CountriesListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CountriesListResponse from a JSON string
countries_list_response_instance = CountriesListResponse.from_json(json)
# print the JSON string representation of the object
print(CountriesListResponse.to_json())

# convert the object into a dict
countries_list_response_dict = countries_list_response_instance.to_dict()
# create an instance of CountriesListResponse from a dict
countries_list_response_from_dict = CountriesListResponse.from_dict(countries_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


