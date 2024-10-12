# CountrySpecifications


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | [**List[CountrySpecification]**](CountrySpecification.md) |  | [optional] 

## Example

```python
from openapi_client.models.country_specifications import CountrySpecifications

# TODO update the JSON string below
json = "{}"
# create an instance of CountrySpecifications from a JSON string
country_specifications_instance = CountrySpecifications.from_json(json)
# print the JSON string representation of the object
print(CountrySpecifications.to_json())

# convert the object into a dict
country_specifications_dict = country_specifications_instance.to_dict()
# create an instance of CountrySpecifications from a dict
country_specifications_from_dict = CountrySpecifications.from_dict(country_specifications_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


