# PasswordStatus

Read-only password status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**locked** | **bool** | If true, user does not have login privileges. | [optional] 
**password_expiration_time** | **str** | The expiration time of the current password. | [optional] 

## Example

```python
from openapi_client.models.password_status import PasswordStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PasswordStatus from a JSON string
password_status_instance = PasswordStatus.from_json(json)
# print the JSON string representation of the object
print(PasswordStatus.to_json())

# convert the object into a dict
password_status_dict = password_status_instance.to_dict()
# create an instance of PasswordStatus from a dict
password_status_from_dict = PasswordStatus.from_dict(password_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


