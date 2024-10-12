# UserName


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The user&#39;s display name. Limit: 256 characters. | [optional] 
**family_name** | **str** | The user&#39;s last name. Required when creating a user account. | [optional] 
**full_name** | **str** | The user&#39;s full name formed by concatenating the first and last name values. | [optional] 
**given_name** | **str** | The user&#39;s first name. Required when creating a user account. | [optional] 

## Example

```python
from openapi_client.models.user_name import UserName

# TODO update the JSON string below
json = "{}"
# create an instance of UserName from a JSON string
user_name_instance = UserName.from_json(json)
# print the JSON string representation of the object
print(UserName.to_json())

# convert the object into a dict
user_name_dict = user_name_instance.to_dict()
# create an instance of UserName from a dict
user_name_from_dict = UserName.from_dict(user_name_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


