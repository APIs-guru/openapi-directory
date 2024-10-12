# SlackNotificationConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**webhook** | **str** |  | 

## Example

```python
from openapi_client.models.slack_notification_configuration import SlackNotificationConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SlackNotificationConfiguration from a JSON string
slack_notification_configuration_instance = SlackNotificationConfiguration.from_json(json)
# print the JSON string representation of the object
print(SlackNotificationConfiguration.to_json())

# convert the object into a dict
slack_notification_configuration_dict = slack_notification_configuration_instance.to_dict()
# create an instance of SlackNotificationConfiguration from a dict
slack_notification_configuration_from_dict = SlackNotificationConfiguration.from_dict(slack_notification_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


