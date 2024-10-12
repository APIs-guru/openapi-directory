# UserLocale

This user's locale

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country this blog&#39;s locale is set to. | [optional] 
**language** | **str** | The language this blog is authored in. | [optional] 
**variant** | **str** | The language variant this blog is authored in. | [optional] 

## Example

```python
from openapi_client.models.user_locale import UserLocale

# TODO update the JSON string below
json = "{}"
# create an instance of UserLocale from a JSON string
user_locale_instance = UserLocale.from_json(json)
# print the JSON string representation of the object
print(UserLocale.to_json())

# convert the object into a dict
user_locale_dict = user_locale_instance.to_dict()
# create an instance of UserLocale from a dict
user_locale_from_dict = UserLocale.from_dict(user_locale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


