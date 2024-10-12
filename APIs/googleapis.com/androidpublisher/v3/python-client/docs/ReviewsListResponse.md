# ReviewsListResponse

Response listing reviews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**page_info** | [**PageInfo**](PageInfo.md) |  | [optional] 
**reviews** | [**List[Review]**](Review.md) | List of reviews. | [optional] 
**token_pagination** | [**TokenPagination**](TokenPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.reviews_list_response import ReviewsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewsListResponse from a JSON string
reviews_list_response_instance = ReviewsListResponse.from_json(json)
# print the JSON string representation of the object
print(ReviewsListResponse.to_json())

# convert the object into a dict
reviews_list_response_dict = reviews_list_response_instance.to_dict()
# create an instance of ReviewsListResponse from a dict
reviews_list_response_from_dict = ReviewsListResponse.from_dict(reviews_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


