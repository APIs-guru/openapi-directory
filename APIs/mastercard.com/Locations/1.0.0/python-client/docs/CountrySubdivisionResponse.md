# CountrySubdivisionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_subdivisions** | [**CountrySubdivisions**](CountrySubdivisions.md) |  | [optional] 

## Example

```python
from openapi_client.models.country_subdivision_response import CountrySubdivisionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CountrySubdivisionResponse from a JSON string
country_subdivision_response_instance = CountrySubdivisionResponse.from_json(json)
# print the JSON string representation of the object
print(CountrySubdivisionResponse.to_json())

# convert the object into a dict
country_subdivision_response_dict = country_subdivision_response_instance.to_dict()
# create an instance of CountrySubdivisionResponse from a dict
country_subdivision_response_from_dict = CountrySubdivisionResponse.from_dict(country_subdivision_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


