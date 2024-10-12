# CountryTargeting

Country targeting specification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**countries** | **List[str]** | Countries to target, specified as two letter [CLDR codes](https://unicode.org/cldr/charts/latest/supplemental/territory_containment_un_m_49.html). | [optional] 
**include_rest_of_world** | **bool** | Include \&quot;rest of world\&quot; as well as explicitly targeted countries. | [optional] 

## Example

```python
from openapi_client.models.country_targeting import CountryTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of CountryTargeting from a JSON string
country_targeting_instance = CountryTargeting.from_json(json)
# print the JSON string representation of the object
print(CountryTargeting.to_json())

# convert the object into a dict
country_targeting_dict = country_targeting_instance.to_dict()
# create an instance of CountryTargeting from a dict
country_targeting_from_dict = CountryTargeting.from_dict(country_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


