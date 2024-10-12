# ReplyList

A list of replies to a comment on a file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#replyList\&quot;&#x60;. | [optional] [default to 'drive#replyList']
**next_page_token** | **str** | The page token for the next page of replies. This will be absent if the end of the replies list has been reached. If the token is rejected for any reason, it should be discarded, and pagination should be restarted from the first page of results. The page token is typically valid for several hours. However, if new items are added or removed, your expected results might differ. | [optional] 
**replies** | [**List[Reply]**](Reply.md) | The list of replies. If nextPageToken is populated, then this list may be incomplete and an additional page of results should be fetched. | [optional] 

## Example

```python
from openapi_client.models.reply_list import ReplyList

# TODO update the JSON string below
json = "{}"
# create an instance of ReplyList from a JSON string
reply_list_instance = ReplyList.from_json(json)
# print the JSON string representation of the object
print(ReplyList.to_json())

# convert the object into a dict
reply_list_dict = reply_list_instance.to_dict()
# create an instance of ReplyList from a dict
reply_list_from_dict = ReplyList.from_dict(reply_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


