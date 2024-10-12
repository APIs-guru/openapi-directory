# UserCountrySet

A set of user countries. A country set determines what variation of app content gets served to a specific location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_codes** | **List[str]** | List of country codes representing countries. A Country code is represented in ISO 3166 alpha-2 format. For Example:- \&quot;IT\&quot; for Italy, \&quot;GE\&quot; for Georgia. | [optional] 
**name** | **str** | Country set name. | [optional] 

## Example

```python
from openapi_client.models.user_country_set import UserCountrySet

# TODO update the JSON string below
json = "{}"
# create an instance of UserCountrySet from a JSON string
user_country_set_instance = UserCountrySet.from_json(json)
# print the JSON string representation of the object
print(UserCountrySet.to_json())

# convert the object into a dict
user_country_set_dict = user_country_set_instance.to_dict()
# create an instance of UserCountrySet from a dict
user_country_set_from_dict = UserCountrySet.from_dict(user_country_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


