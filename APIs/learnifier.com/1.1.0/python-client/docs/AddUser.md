# AddUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The name shown when the user is listed | [optional] 
**external_id** | **str** | The external id (foreign key). Must not exceed 255 characters. | [optional] 
**first_name** | **str** | The first (given) name of the user | [optional] 
**hard_lock** | **bool** | True if the user should be locked from the system | [optional] 
**home_org** | **int** | The primary organization for the user. Must match the id of an Organization Unit. | [optional] 
**last_name** | **object** | The last name (surname) of the user | [optional] 
**locale** | **str** | The user&#39;s preferred language/locale setting. Affects date and number formatting. | [optional] 
**primary_email** | **str** | The primary email for the user. Used for communication from the platform. | [optional] 

## Example

```python
from openapi_client.models.add_user import AddUser

# TODO update the JSON string below
json = "{}"
# create an instance of AddUser from a JSON string
add_user_instance = AddUser.from_json(json)
# print the JSON string representation of the object
print(AddUser.to_json())

# convert the object into a dict
add_user_dict = add_user_instance.to_dict()
# create an instance of AddUser from a dict
add_user_from_dict = AddUser.from_dict(add_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


