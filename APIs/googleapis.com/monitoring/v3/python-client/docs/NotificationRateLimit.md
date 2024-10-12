# NotificationRateLimit

Control over the rate of notifications sent to this alert policy's notification channels.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**period** | **str** | Not more than one notification per period. | [optional] 

## Example

```python
from openapi_client.models.notification_rate_limit import NotificationRateLimit

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationRateLimit from a JSON string
notification_rate_limit_instance = NotificationRateLimit.from_json(json)
# print the JSON string representation of the object
print(NotificationRateLimit.to_json())

# convert the object into a dict
notification_rate_limit_dict = notification_rate_limit_instance.to_dict()
# create an instance of NotificationRateLimit from a dict
notification_rate_limit_from_dict = NotificationRateLimit.from_dict(notification_rate_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


