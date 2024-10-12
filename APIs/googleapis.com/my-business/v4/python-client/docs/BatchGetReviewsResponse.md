# BatchGetReviewsResponse

Response message for Reviews.BatchGetReviews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_reviews** | [**List[LocationReview]**](LocationReview.md) | Reviews with location information. | [optional] 
**next_page_token** | **str** | If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent calls. If there are no more reviews, this field will not be present in the response. | [optional] 

## Example

```python
from openapi_client.models.batch_get_reviews_response import BatchGetReviewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetReviewsResponse from a JSON string
batch_get_reviews_response_instance = BatchGetReviewsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchGetReviewsResponse.to_json())

# convert the object into a dict
batch_get_reviews_response_dict = batch_get_reviews_response_instance.to_dict()
# create an instance of BatchGetReviewsResponse from a dict
batch_get_reviews_response_from_dict = BatchGetReviewsResponse.from_dict(batch_get_reviews_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


