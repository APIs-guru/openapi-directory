# UserRecord

A team member user record

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**admin** | **bool** | If the user has admin privileges then the user will be able to create password reset requests on behalf of other users, and will also be able to view and edit  the data of other users.  | [optional] 
**email** | **str** | The user&#39;s email address | [optional] 
**id** | **int** | The id of the user&#39;s record | [optional] 
**name** | **str** | The user&#39;s name | [optional] 
**read_only** | **bool** | Not used in this version of the API. For future use. | [optional] 

## Example

```python
from openapi_client.models.user_record import UserRecord

# TODO update the JSON string below
json = "{}"
# create an instance of UserRecord from a JSON string
user_record_instance = UserRecord.from_json(json)
# print the JSON string representation of the object
print(UserRecord.to_json())

# convert the object into a dict
user_record_dict = user_record_instance.to_dict()
# create an instance of UserRecord from a dict
user_record_from_dict = UserRecord.from_dict(user_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


