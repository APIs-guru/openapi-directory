# UserDetails

User details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cover_picture_file** | **str** | The ID of the user profile cover picture | [optional] 
**id** | **str** | Identifier of the user | [optional] 
**locale** | [**FlatLocales**](FlatLocales.md) |  | [optional] [default to FlatLocales.EN]
**picture_file** | **str** | The ID of the user profile picture | [optional] 
**private_profile** | **bool** | Tell either this user profile is private or not (individual accounts only) | [optional] 
**type** | **str** | The type of account | [optional] 

## Example

```python
from openapi_client.models.user_details import UserDetails

# TODO update the JSON string below
json = "{}"
# create an instance of UserDetails from a JSON string
user_details_instance = UserDetails.from_json(json)
# print the JSON string representation of the object
print(UserDetails.to_json())

# convert the object into a dict
user_details_dict = user_details_instance.to_dict()
# create an instance of UserDetails from a dict
user_details_from_dict = UserDetails.from_dict(user_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


