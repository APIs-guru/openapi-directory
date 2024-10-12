# SlackChannel

Slack channel definition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SlackChannelProperties**](SlackChannelProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.slack_channel import SlackChannel

# TODO update the JSON string below
json = "{}"
# create an instance of SlackChannel from a JSON string
slack_channel_instance = SlackChannel.from_json(json)
# print the JSON string representation of the object
print(SlackChannel.to_json())

# convert the object into a dict
slack_channel_dict = slack_channel_instance.to_dict()
# create an instance of SlackChannel from a dict
slack_channel_from_dict = SlackChannel.from_dict(slack_channel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


