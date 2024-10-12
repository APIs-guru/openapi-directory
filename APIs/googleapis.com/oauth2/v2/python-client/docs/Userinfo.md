# Userinfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | The user&#39;s email address. | [optional] 
**family_name** | **str** | The user&#39;s last name. | [optional] 
**gender** | **str** | The user&#39;s gender. | [optional] 
**given_name** | **str** | The user&#39;s first name. | [optional] 
**hd** | **str** | The hosted domain e.g. example.com if the user is Google apps user. | [optional] 
**id** | **str** | The obfuscated ID of the user. | [optional] 
**link** | **str** | URL of the profile page. | [optional] 
**locale** | **str** | The user&#39;s preferred locale. | [optional] 
**name** | **str** | The user&#39;s full name. | [optional] 
**picture** | **str** | URL of the user&#39;s picture image. | [optional] 
**verified_email** | **bool** | Boolean flag which is true if the email address is verified. Always verified because we only return the user&#39;s primary email address. | [optional] [default to True]

## Example

```python
from openapi_client.models.userinfo import Userinfo

# TODO update the JSON string below
json = "{}"
# create an instance of Userinfo from a JSON string
userinfo_instance = Userinfo.from_json(json)
# print the JSON string representation of the object
print(Userinfo.to_json())

# convert the object into a dict
userinfo_dict = userinfo_instance.to_dict()
# create an instance of Userinfo from a dict
userinfo_from_dict = Userinfo.from_dict(userinfo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


