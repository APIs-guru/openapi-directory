# CountryObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | [**TheCountryCodeOfTheCountry**](TheCountryCodeOfTheCountry.md) |  | [optional] 

## Example

```python
from openapi_client.models.country_object import CountryObject

# TODO update the JSON string below
json = "{}"
# create an instance of CountryObject from a JSON string
country_object_instance = CountryObject.from_json(json)
# print the JSON string representation of the object
print(CountryObject.to_json())

# convert the object into a dict
country_object_dict = country_object_instance.to_dict()
# create an instance of CountryObject from a dict
country_object_from_dict = CountryObject.from_dict(country_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


