# ReviewsReplyResponse

Response on status of replying to a review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ReviewReplyResult**](ReviewReplyResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.reviews_reply_response import ReviewsReplyResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewsReplyResponse from a JSON string
reviews_reply_response_instance = ReviewsReplyResponse.from_json(json)
# print the JSON string representation of the object
print(ReviewsReplyResponse.to_json())

# convert the object into a dict
reviews_reply_response_dict = reviews_reply_response_instance.to_dict()
# create an instance of ReviewsReplyResponse from a dict
reviews_reply_response_from_dict = ReviewsReplyResponse.from_dict(reviews_reply_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


