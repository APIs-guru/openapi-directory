# AnswerInlineQueryPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_time** | **int** | The maximum amount of time in seconds that the result of the inline query may be cached on the server. Defaults to 300. | [optional] [default to 300]
**inline_query_id** | **str** | Unique identifier for the answered query | 
**is_personal** | **bool** | Pass *True*, if results may be cached on the server side only for the user that sent the query. By default, results may be returned to any user who sends the same query | [optional] 
**next_offset** | **str** | Pass the offset that a client should send in the next query with the same text to receive more results. Pass an empty string if there are no more results or if you don&#39;t support pagination. Offset length can&#39;t exceed 64 bytes. | [optional] 
**results** | [**List[InlineQueryResult]**](InlineQueryResult.md) | A JSON-serialized array of results for the inline query | 
**switch_pm_parameter** | **str** | [Deep-linking](/bots#deep-linking) parameter for the /start message sent to the bot when user presses the switch button. 1-64 characters, only &#x60;A-Z&#x60;, &#x60;a-z&#x60;, &#x60;0-9&#x60;, &#x60;_&#x60; and &#x60;-&#x60; are allowed.    *Example:* An inline bot that sends YouTube videos can ask the user to connect the bot to their YouTube account to adapt search results accordingly. To do this, it displays a &#39;Connect your YouTube account&#39; button above the results, or even before showing any. The user presses the button, switches to a private chat with the bot and, in doing so, passes a start parameter that instructs the bot to return an oauth link. Once done, the bot can offer a [*switch\\_inline*](https://core.telegram.org/bots/api/#inlinekeyboardmarkup) button so that the user can easily return to the chat where they wanted to use the bot&#39;s inline capabilities. | [optional] 
**switch_pm_text** | **str** | If passed, clients will display a button with specified text that switches the user to a private chat with the bot and sends the bot a start message with the parameter *switch\\_pm\\_parameter* | [optional] 

## Example

```python
from openapi_client.models.answer_inline_query_post_request import AnswerInlineQueryPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnswerInlineQueryPostRequest from a JSON string
answer_inline_query_post_request_instance = AnswerInlineQueryPostRequest.from_json(json)
# print the JSON string representation of the object
print(AnswerInlineQueryPostRequest.to_json())

# convert the object into a dict
answer_inline_query_post_request_dict = answer_inline_query_post_request_instance.to_dict()
# create an instance of AnswerInlineQueryPostRequest from a dict
answer_inline_query_post_request_from_dict = AnswerInlineQueryPostRequest.from_dict(answer_inline_query_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


