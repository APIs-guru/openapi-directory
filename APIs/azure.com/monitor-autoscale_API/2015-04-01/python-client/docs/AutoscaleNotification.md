# AutoscaleNotification

Autoscale notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | [**EmailNotification**](EmailNotification.md) |  | [optional] 
**operation** | **str** | the operation associated with the notification and its value must be \&quot;scale\&quot; | 
**webhooks** | [**List[WebhookNotification]**](WebhookNotification.md) | the collection of webhook notifications. | [optional] 

## Example

```python
from openapi_client.models.autoscale_notification import AutoscaleNotification

# TODO update the JSON string below
json = "{}"
# create an instance of AutoscaleNotification from a JSON string
autoscale_notification_instance = AutoscaleNotification.from_json(json)
# print the JSON string representation of the object
print(AutoscaleNotification.to_json())

# convert the object into a dict
autoscale_notification_dict = autoscale_notification_instance.to_dict()
# create an instance of AutoscaleNotification from a dict
autoscale_notification_from_dict = AutoscaleNotification.from_dict(autoscale_notification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


