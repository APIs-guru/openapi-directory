# UserPhoneNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phone_number** | **str** | the phone number | [optional] 
**type** | **str** | the type of the phone number | [optional] 

## Example

```python
from openapi_client.models.user_phone_number import UserPhoneNumber

# TODO update the JSON string below
json = "{}"
# create an instance of UserPhoneNumber from a JSON string
user_phone_number_instance = UserPhoneNumber.from_json(json)
# print the JSON string representation of the object
print(UserPhoneNumber.to_json())

# convert the object into a dict
user_phone_number_dict = user_phone_number_instance.to_dict()
# create an instance of UserPhoneNumber from a dict
user_phone_number_from_dict = UserPhoneNumber.from_dict(user_phone_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


