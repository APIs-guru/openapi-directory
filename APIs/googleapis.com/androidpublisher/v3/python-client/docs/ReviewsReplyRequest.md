# ReviewsReplyRequest

Request to reply to review or update existing reply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reply_text** | **str** | The text to set as the reply. Replies of more than approximately 350 characters will be rejected. HTML tags will be stripped. | [optional] 

## Example

```python
from openapi_client.models.reviews_reply_request import ReviewsReplyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewsReplyRequest from a JSON string
reviews_reply_request_instance = ReviewsReplyRequest.from_json(json)
# print the JSON string representation of the object
print(ReviewsReplyRequest.to_json())

# convert the object into a dict
reviews_reply_request_dict = reviews_reply_request_instance.to_dict()
# create an instance of ReviewsReplyRequest from a dict
reviews_reply_request_from_dict = ReviewsReplyRequest.from_dict(reviews_reply_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


