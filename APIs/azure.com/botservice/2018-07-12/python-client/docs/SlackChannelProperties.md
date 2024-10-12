# SlackChannelProperties

The parameters to provide for the Slack channel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | The Slack client id | 
**client_secret** | **str** | The Slack client secret. Value only returned through POST to the action Channel List API, otherwise empty. | 
**is_enabled** | **bool** | Whether this channel is enabled for the bot | 
**is_validated** | **bool** | Whether this channel is validated for the bot | [optional] [readonly] 
**landing_page_url** | **str** | The Slack landing page Url | [optional] 
**last_submission_id** | **str** | The Sms auth token | [optional] [readonly] 
**redirect_action** | **str** | The Slack redirect action | [optional] [readonly] 
**register_before_o_auth_flow** | **bool** | Whether to register the settings before OAuth validation is performed. Recommended to True. | [optional] [readonly] 
**verification_token** | **str** | The Slack verification token. Value only returned through POST to the action Channel List API, otherwise empty. | 

## Example

```python
from openapi_client.models.slack_channel_properties import SlackChannelProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SlackChannelProperties from a JSON string
slack_channel_properties_instance = SlackChannelProperties.from_json(json)
# print the JSON string representation of the object
print(SlackChannelProperties.to_json())

# convert the object into a dict
slack_channel_properties_dict = slack_channel_properties_instance.to_dict()
# create an instance of SlackChannelProperties from a dict
slack_channel_properties_from_dict = SlackChannelProperties.from_dict(slack_channel_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


