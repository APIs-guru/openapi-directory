# ListReviewsResponse

Response message for Reviews.ListReviews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_rating** | **float** | The average star rating of all reviews for this location on a scale of 1 to 5, where 5 is the highest rating. | [optional] 
**next_page_token** | **str** | If the number of reviews exceeded the requested page size, this field is populated with a token to fetch the next page of reviews on a subsequent call to ListReviews. If there are no more reviews, this field is not present in the response. | [optional] 
**reviews** | [**List[Review]**](Review.md) | The reviews. | [optional] 
**total_review_count** | **int** | The total number of reviews for this location. | [optional] 

## Example

```python
from openapi_client.models.list_reviews_response import ListReviewsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReviewsResponse from a JSON string
list_reviews_response_instance = ListReviewsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReviewsResponse.to_json())

# convert the object into a dict
list_reviews_response_dict = list_reviews_response_instance.to_dict()
# create an instance of ListReviewsResponse from a dict
list_reviews_response_from_dict = ListReviewsResponse.from_dict(list_reviews_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


