# UserGender


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address_me_as** | **str** | AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their. | [optional] 
**custom_gender** | **str** | Custom gender. | [optional] 
**type** | **str** | Gender. | [optional] 

## Example

```python
from openapi_client.models.user_gender import UserGender

# TODO update the JSON string below
json = "{}"
# create an instance of UserGender from a JSON string
user_gender_instance = UserGender.from_json(json)
# print the JSON string representation of the object
print(UserGender.to_json())

# convert the object into a dict
user_gender_dict = user_gender_instance.to_dict()
# create an instance of UserGender from a dict
user_gender_from_dict = UserGender.from_dict(user_gender_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


