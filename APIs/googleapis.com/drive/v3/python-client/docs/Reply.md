# Reply

A reply to a comment on a file. Some resource methods (such as `replies.update`) require a `replyId`. Use the `replies.list` method to retrieve the ID for a reply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The action the reply performed to the parent comment. Valid values are: * &#x60;resolve&#x60; * &#x60;reopen&#x60; | [optional] 
**author** | [**User**](User.md) |  | [optional] 
**content** | **str** | The plain text content of the reply. This field is used for setting the content, while &#x60;htmlContent&#x60; should be displayed. This is required on creates if no &#x60;action&#x60; is specified. | [optional] 
**created_time** | **datetime** | The time at which the reply was created (RFC 3339 date-time). | [optional] 
**deleted** | **bool** | Output only. Whether the reply has been deleted. A deleted reply has no content. | [optional] 
**html_content** | **str** | Output only. The content of the reply with HTML formatting. | [optional] 
**id** | **str** | Output only. The ID of the reply. | [optional] 
**kind** | **str** | Output only. Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#reply\&quot;&#x60;. | [optional] [default to 'drive#reply']
**modified_time** | **datetime** | The last time the reply was modified (RFC 3339 date-time). | [optional] 

## Example

```python
from openapi_client.models.reply import Reply

# TODO update the JSON string below
json = "{}"
# create an instance of Reply from a JSON string
reply_instance = Reply.from_json(json)
# print the JSON string representation of the object
print(Reply.to_json())

# convert the object into a dict
reply_dict = reply_instance.to_dict()
# create an instance of Reply from a dict
reply_from_dict = Reply.from_dict(reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


