# ResetPasswordPayload

Represents the payload for resetting passwords.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environment_id** | **str** | The resourceId of the environment | 
**password** | **str** | The password to assign to the user specified in | [optional] 
**username** | **str** | The username for which the password will be reset. | [optional] 

## Example

```python
from openapi_client.models.reset_password_payload import ResetPasswordPayload

# TODO update the JSON string below
json = "{}"
# create an instance of ResetPasswordPayload from a JSON string
reset_password_payload_instance = ResetPasswordPayload.from_json(json)
# print the JSON string representation of the object
print(ResetPasswordPayload.to_json())

# convert the object into a dict
reset_password_payload_dict = reset_password_payload_instance.to_dict()
# create an instance of ResetPasswordPayload from a dict
reset_password_payload_from_dict = ResetPasswordPayload.from_dict(reset_password_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


