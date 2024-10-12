# UserWithheld

Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_codes** | **List[str]** | Provides a list of countries where this content is not available. | 
**scope** | **str** | Indicates that the content being withheld is a &#x60;user&#x60;. | [optional] 

## Example

```python
from openapi_client.models.user_withheld import UserWithheld

# TODO update the JSON string below
json = "{}"
# create an instance of UserWithheld from a JSON string
user_withheld_instance = UserWithheld.from_json(json)
# print the JSON string representation of the object
print(UserWithheld.to_json())

# convert the object into a dict
user_withheld_dict = user_withheld_instance.to_dict()
# create an instance of UserWithheld from a dict
user_withheld_from_dict = UserWithheld.from_dict(user_withheld_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


