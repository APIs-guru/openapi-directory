# ApplicationNotificationPolicy

Managed application notification policy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notification_endpoints** | [**List[ApplicationNotificationEndpoint]**](ApplicationNotificationEndpoint.md) | The managed application notification endpoint. | 

## Example

```python
from openapi_client.models.application_notification_policy import ApplicationNotificationPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationNotificationPolicy from a JSON string
application_notification_policy_instance = ApplicationNotificationPolicy.from_json(json)
# print the JSON string representation of the object
print(ApplicationNotificationPolicy.to_json())

# convert the object into a dict
application_notification_policy_dict = application_notification_policy_instance.to_dict()
# create an instance of ApplicationNotificationPolicy from a dict
application_notification_policy_from_dict = ApplicationNotificationPolicy.from_dict(application_notification_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


