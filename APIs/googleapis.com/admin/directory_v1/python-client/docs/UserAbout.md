# UserAbout

JSON template for About (notes) of a user in Directory API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_type** | **str** | About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text. | [optional] 
**value** | **str** | Actual value of notes. | [optional] 

## Example

```python
from openapi_client.models.user_about import UserAbout

# TODO update the JSON string below
json = "{}"
# create an instance of UserAbout from a JSON string
user_about_instance = UserAbout.from_json(json)
# print the JSON string representation of the object
print(UserAbout.to_json())

# convert the object into a dict
user_about_dict = user_about_instance.to_dict()
# create an instance of UserAbout from a dict
user_about_from_dict = UserAbout.from_dict(user_about_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


