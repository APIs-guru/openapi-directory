# UserWebsite

JSON template for a website entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type** | **str** | Custom Type. | [optional] 
**primary** | **bool** | If this is user&#39;s primary website or not. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. | [optional] 
**value** | **str** | Website. | [optional] 

## Example

```python
from openapi_client.models.user_website import UserWebsite

# TODO update the JSON string below
json = "{}"
# create an instance of UserWebsite from a JSON string
user_website_instance = UserWebsite.from_json(json)
# print the JSON string representation of the object
print(UserWebsite.to_json())

# convert the object into a dict
user_website_dict = user_website_instance.to_dict()
# create an instance of UserWebsite from a dict
user_website_from_dict = UserWebsite.from_dict(user_website_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


