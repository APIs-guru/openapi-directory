# SensitiveAdminAction

Alert that is triggered when Sensitive Admin Action occur in customer account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_email** | **str** | Email of person who performed the action | [optional] 
**event_time** | **str** | The time at which event occurred | [optional] 
**primary_admin_changed_event** | [**PrimaryAdminChangedEvent**](PrimaryAdminChangedEvent.md) |  | [optional] 
**sso_profile_created_event** | [**SSOProfileCreatedEvent**](SSOProfileCreatedEvent.md) |  | [optional] 
**sso_profile_deleted_event** | [**SSOProfileDeletedEvent**](SSOProfileDeletedEvent.md) |  | [optional] 
**sso_profile_updated_event** | [**SSOProfileUpdatedEvent**](SSOProfileUpdatedEvent.md) |  | [optional] 
**super_admin_password_reset_event** | [**SuperAdminPasswordResetEvent**](SuperAdminPasswordResetEvent.md) |  | [optional] 

## Example

```python
from openapi_client.models.sensitive_admin_action import SensitiveAdminAction

# TODO update the JSON string below
json = "{}"
# create an instance of SensitiveAdminAction from a JSON string
sensitive_admin_action_instance = SensitiveAdminAction.from_json(json)
# print the JSON string representation of the object
print(SensitiveAdminAction.to_json())

# convert the object into a dict
sensitive_admin_action_dict = sensitive_admin_action_instance.to_dict()
# create an instance of SensitiveAdminAction from a dict
sensitive_admin_action_from_dict = SensitiveAdminAction.from_dict(sensitive_admin_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


