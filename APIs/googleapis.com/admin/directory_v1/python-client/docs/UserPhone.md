# UserPhone

JSON template for a phone entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_type** | **str** | Custom Type. | [optional] 
**primary** | **bool** | If this is user&#39;s primary phone or not. | [optional] 
**type** | **str** | Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value. | [optional] 
**value** | **str** | Phone number. | [optional] 

## Example

```python
from openapi_client.models.user_phone import UserPhone

# TODO update the JSON string below
json = "{}"
# create an instance of UserPhone from a JSON string
user_phone_instance = UserPhone.from_json(json)
# print the JSON string representation of the object
print(UserPhone.to_json())

# convert the object into a dict
user_phone_dict = user_phone_instance.to_dict()
# create an instance of UserPhone from a dict
user_phone_from_dict = UserPhone.from_dict(user_phone_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


