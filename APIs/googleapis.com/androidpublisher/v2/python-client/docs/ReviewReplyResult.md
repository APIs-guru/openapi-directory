# ReviewReplyResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_edited** | [**Timestamp**](Timestamp.md) |  | [optional] 
**reply_text** | **str** | The reply text that was applied. | [optional] 

## Example

```python
from openapi_client.models.review_reply_result import ReviewReplyResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewReplyResult from a JSON string
review_reply_result_instance = ReviewReplyResult.from_json(json)
# print the JSON string representation of the object
print(ReviewReplyResult.to_json())

# convert the object into a dict
review_reply_result_dict = review_reply_result_instance.to_dict()
# create an instance of ReviewReplyResult from a dict
review_reply_result_from_dict = ReviewReplyResult.from_dict(review_reply_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


