# CountryResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Country**](Country.md) |  | [optional] 

## Example

```python
from openapi_client.models.country_response import CountryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CountryResponse from a JSON string
country_response_instance = CountryResponse.from_json(json)
# print the JSON string representation of the object
print(CountryResponse.to_json())

# convert the object into a dict
country_response_dict = country_response_instance.to_dict()
# create an instance of CountryResponse from a dict
country_response_from_dict = CountryResponse.from_dict(country_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


