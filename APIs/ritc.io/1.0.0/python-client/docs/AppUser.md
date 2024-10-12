# AppUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | **object** | Object containing user-defined app user configuration | [optional] 
**name** | **str** | Display name of App User | [optional] 
**password** | **str** | App User password | [optional] 

## Example

```python
from openapi_client.models.app_user import AppUser

# TODO update the JSON string below
json = "{}"
# create an instance of AppUser from a JSON string
app_user_instance = AppUser.from_json(json)
# print the JSON string representation of the object
print(AppUser.to_json())

# convert the object into a dict
app_user_dict = app_user_instance.to_dict()
# create an instance of AppUser from a dict
app_user_from_dict = AppUser.from_dict(app_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


