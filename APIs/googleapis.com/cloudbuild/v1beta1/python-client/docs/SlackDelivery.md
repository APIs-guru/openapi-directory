# SlackDelivery

SlackDelivery is the delivery configuration for delivering Slack messages via webhooks. See Slack webhook documentation at: https://api.slack.com/messaging/webhooks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook_uri** | [**NotifierSecretRef**](NotifierSecretRef.md) |  | [optional] 

## Example

```python
from openapi_client.models.slack_delivery import SlackDelivery

# TODO update the JSON string below
json = "{}"
# create an instance of SlackDelivery from a JSON string
slack_delivery_instance = SlackDelivery.from_json(json)
# print the JSON string representation of the object
print(SlackDelivery.to_json())

# convert the object into a dict
slack_delivery_dict = slack_delivery_instance.to_dict()
# create an instance of SlackDelivery from a dict
slack_delivery_from_dict = SlackDelivery.from_dict(slack_delivery_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


