# SendPollPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_sending_without_reply** | **bool** | Pass *True*, if the message should be sent even if the specified replied-to message is not found | [optional] 
**allows_multiple_answers** | **bool** | True, if the poll allows multiple answers, ignored for polls in quiz mode, defaults to *False* | [optional] 
**chat_id** | [**CopyMessagePostRequestChatId**](CopyMessagePostRequestChatId.md) |  | 
**close_date** | **int** | Point in time (Unix timestamp) when the poll will be automatically closed. Must be at least 5 and no more than 600 seconds in the future. Can&#39;t be used together with *open\\_period*. | [optional] 
**correct_option_id** | **int** | 0-based identifier of the correct answer option, required for polls in quiz mode | [optional] 
**disable_notification** | **bool** | Sends the message [silently](https://telegram.org/blog/channels-2-0#silent-messages). Users will receive a notification with no sound. | [optional] 
**explanation** | **str** | Text that is shown when a user chooses an incorrect answer or taps on the lamp icon in a quiz-style poll, 0-200 characters with at most 2 line feeds after entities parsing | [optional] 
**explanation_entities** | [**List[MessageEntity]**](MessageEntity.md) | List of special entities that appear in the poll explanation, which can be specified instead of *parse\\_mode* | [optional] 
**explanation_parse_mode** | **str** | Mode for parsing entities in the explanation. See [formatting options](https://core.telegram.org/bots/api/#formatting-options) for more details. | [optional] 
**is_anonymous** | **bool** | True, if the poll needs to be anonymous, defaults to *True* | [optional] 
**is_closed** | **bool** | Pass *True*, if the poll needs to be immediately closed. This can be useful for poll preview. | [optional] 
**open_period** | **int** | Amount of time in seconds the poll will be active after creation, 5-600. Can&#39;t be used together with *close\\_date*. | [optional] 
**options** | **List[str]** | A JSON-serialized list of answer options, 2-10 strings 1-100 characters each | 
**question** | **str** | Poll question, 1-300 characters | 
**reply_markup** | [**CopyMessagePostRequestReplyMarkup**](CopyMessagePostRequestReplyMarkup.md) |  | [optional] 
**reply_to_message_id** | **int** | If the message is a reply, ID of the original message | [optional] 
**type** | **str** | Poll type, “quiz” or “regular”, defaults to “regular” | [optional] 

## Example

```python
from openapi_client.models.send_poll_post_request import SendPollPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SendPollPostRequest from a JSON string
send_poll_post_request_instance = SendPollPostRequest.from_json(json)
# print the JSON string representation of the object
print(SendPollPostRequest.to_json())

# convert the object into a dict
send_poll_post_request_dict = send_poll_post_request_instance.to_dict()
# create an instance of SendPollPostRequest from a dict
send_poll_post_request_from_dict = SendPollPostRequest.from_dict(send_poll_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


