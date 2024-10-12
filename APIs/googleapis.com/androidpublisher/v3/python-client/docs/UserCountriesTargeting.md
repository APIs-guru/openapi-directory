# UserCountriesTargeting

Describes an inclusive/exclusive list of country codes that module targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_codes** | **List[str]** | List of country codes in the two-letter CLDR territory format. | [optional] 
**exclude** | **bool** | Indicates if the list above is exclusive. | [optional] 

## Example

```python
from openapi_client.models.user_countries_targeting import UserCountriesTargeting

# TODO update the JSON string below
json = "{}"
# create an instance of UserCountriesTargeting from a JSON string
user_countries_targeting_instance = UserCountriesTargeting.from_json(json)
# print the JSON string representation of the object
print(UserCountriesTargeting.to_json())

# convert the object into a dict
user_countries_targeting_dict = user_countries_targeting_instance.to_dict()
# create an instance of UserCountriesTargeting from a dict
user_countries_targeting_from_dict = UserCountriesTargeting.from_dict(user_countries_targeting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


