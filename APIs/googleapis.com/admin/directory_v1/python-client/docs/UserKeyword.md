# UserKeyword

JSON template for a keyword entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type** | **str** | Custom Type. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. | [optional] 
**value** | **str** | Keyword. | [optional] 

## Example

```python
from openapi_client.models.user_keyword import UserKeyword

# TODO update the JSON string below
json = "{}"
# create an instance of UserKeyword from a JSON string
user_keyword_instance = UserKeyword.from_json(json)
# print the JSON string representation of the object
print(UserKeyword.to_json())

# convert the object into a dict
user_keyword_dict = user_keyword_instance.to_dict()
# create an instance of UserKeyword from a dict
user_keyword_from_dict = UserKeyword.from_dict(user_keyword_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


