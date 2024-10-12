# ReviewReply

Represents the location owner/manager's reply to a review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The body of the reply as plain text with markups. The maximum length is 4096 bytes. | [optional] 
**update_time** | **str** | Output only. The timestamp for when the reply was last modified. | [optional] 

## Example

```python
from openapi_client.models.review_reply import ReviewReply

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewReply from a JSON string
review_reply_instance = ReviewReply.from_json(json)
# print the JSON string representation of the object
print(ReviewReply.to_json())

# convert the object into a dict
review_reply_dict = review_reply_instance.to_dict()
# create an instance of ReviewReply from a dict
review_reply_from_dict = ReviewReply.from_dict(review_reply_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


