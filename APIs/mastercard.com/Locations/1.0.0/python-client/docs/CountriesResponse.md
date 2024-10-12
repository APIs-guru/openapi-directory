# CountriesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**Countries**](Countries.md) |  | [optional] 

## Example

```python
from openapi_client.models.countries_response import CountriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CountriesResponse from a JSON string
countries_response_instance = CountriesResponse.from_json(json)
# print the JSON string representation of the object
print(CountriesResponse.to_json())

# convert the object into a dict
countries_response_dict = countries_response_instance.to_dict()
# create an instance of CountriesResponse from a dict
countries_response_from_dict = CountriesResponse.from_dict(countries_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


