# SuperAdminPasswordResetEvent

Event occurred when password was reset for super admin in customer's account. The event are being received from insight forwarder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_email** | **str** | email of person whose password was reset | [optional] 

## Example

```python
from openapi_client.models.super_admin_password_reset_event import SuperAdminPasswordResetEvent

# TODO update the JSON string below
json = "{}"
# create an instance of SuperAdminPasswordResetEvent from a JSON string
super_admin_password_reset_event_instance = SuperAdminPasswordResetEvent.from_json(json)
# print the JSON string representation of the object
print(SuperAdminPasswordResetEvent.to_json())

# convert the object into a dict
super_admin_password_reset_event_dict = super_admin_password_reset_event_instance.to_dict()
# create an instance of SuperAdminPasswordResetEvent from a dict
super_admin_password_reset_event_from_dict = SuperAdminPasswordResetEvent.from_dict(super_admin_password_reset_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


