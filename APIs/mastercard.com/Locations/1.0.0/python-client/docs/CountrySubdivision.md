# CountrySubdivision


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Abbreviated code for the state or province. | [optional] 
**name** | **str** | Name of the state or province for an ATM location. | [optional] 

## Example

```python
from openapi_client.models.country_subdivision import CountrySubdivision

# TODO update the JSON string below
json = "{}"
# create an instance of CountrySubdivision from a JSON string
country_subdivision_instance = CountrySubdivision.from_json(json)
# print the JSON string representation of the object
print(CountrySubdivision.to_json())

# convert the object into a dict
country_subdivision_dict = country_subdivision_instance.to_dict()
# create an instance of CountrySubdivision from a dict
country_subdivision_from_dict = CountrySubdivision.from_dict(country_subdivision_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


