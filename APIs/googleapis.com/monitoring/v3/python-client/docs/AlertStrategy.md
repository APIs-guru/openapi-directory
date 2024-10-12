# AlertStrategy

Control over how the notification channels in notification_channels are notified when this alert fires.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_close** | **str** | If an alert policy that was active has no data for this long, any open incidents will close | [optional] 
**notification_channel_strategy** | [**List[NotificationChannelStrategy]**](NotificationChannelStrategy.md) | Control how notifications will be sent out, on a per-channel basis. | [optional] 
**notification_rate_limit** | [**NotificationRateLimit**](NotificationRateLimit.md) |  | [optional] 

## Example

```python
from openapi_client.models.alert_strategy import AlertStrategy

# TODO update the JSON string below
json = "{}"
# create an instance of AlertStrategy from a JSON string
alert_strategy_instance = AlertStrategy.from_json(json)
# print the JSON string representation of the object
print(AlertStrategy.to_json())

# convert the object into a dict
alert_strategy_dict = alert_strategy_instance.to_dict()
# create an instance of AlertStrategy from a dict
alert_strategy_from_dict = AlertStrategy.from_dict(alert_strategy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


