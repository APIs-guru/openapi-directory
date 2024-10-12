# SlackMessageRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base64_message** | **str** |  | [optional] 
**channel** | **str** |  | 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.slack_message_request import SlackMessageRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SlackMessageRequest from a JSON string
slack_message_request_instance = SlackMessageRequest.from_json(json)
# print the JSON string representation of the object
print(SlackMessageRequest.to_json())

# convert the object into a dict
slack_message_request_dict = slack_message_request_instance.to_dict()
# create an instance of SlackMessageRequest from a dict
slack_message_request_from_dict = SlackMessageRequest.from_dict(slack_message_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


