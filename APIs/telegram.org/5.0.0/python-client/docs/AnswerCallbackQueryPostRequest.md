# AnswerCallbackQueryPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cache_time** | **int** | The maximum amount of time in seconds that the result of the callback query may be cached client-side. Telegram apps will support caching starting in version 3.14. Defaults to 0. | [optional] [default to 0]
**callback_query_id** | **str** | Unique identifier for the query to be answered | 
**show_alert** | **bool** | If *true*, an alert will be shown by the client instead of a notification at the top of the chat screen. Defaults to *false*. | [optional] [default to False]
**text** | **str** | Text of the notification. If not specified, nothing will be shown to the user, 0-200 characters | [optional] 
**url** | **str** | URL that will be opened by the user&#39;s client. If you have created a [Game](https://core.telegram.org/bots/api/#game) and accepted the conditions via [@Botfather](https://t.me/botfather), specify the URL that opens your game — note that this will only work if the query comes from a [*callback\\_game*](https://core.telegram.org/bots/api/#inlinekeyboardbutton) button.    Otherwise, you may use links like &#x60;t.me/your_bot?start&#x3D;XXXX&#x60; that open your bot with a parameter. | [optional] 

## Example

```python
from openapi_client.models.answer_callback_query_post_request import AnswerCallbackQueryPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AnswerCallbackQueryPostRequest from a JSON string
answer_callback_query_post_request_instance = AnswerCallbackQueryPostRequest.from_json(json)
# print the JSON string representation of the object
print(AnswerCallbackQueryPostRequest.to_json())

# convert the object into a dict
answer_callback_query_post_request_dict = answer_callback_query_post_request_instance.to_dict()
# create an instance of AnswerCallbackQueryPostRequest from a dict
answer_callback_query_post_request_from_dict = AnswerCallbackQueryPostRequest.from_dict(answer_callback_query_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


