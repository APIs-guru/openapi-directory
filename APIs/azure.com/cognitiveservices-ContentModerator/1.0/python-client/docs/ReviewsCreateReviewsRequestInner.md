# ReviewsCreateReviewsRequestInner

Schema items of the body.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_endpoint** | **str** | Optional CallbackEndpoint. | [optional] 
**content** | **str** | Content to review. | 
**content_id** | **str** | Content Identifier. | 
**metadata** | [**List[ReviewsCreateReviewsRequestInnerMetadataInner]**](ReviewsCreateReviewsRequestInnerMetadataInner.md) | Optional metadata details. | [optional] 
**type** | **str** | Type of the content. | 

## Example

```python
from openapi_client.models.reviews_create_reviews_request_inner import ReviewsCreateReviewsRequestInner

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewsCreateReviewsRequestInner from a JSON string
reviews_create_reviews_request_inner_instance = ReviewsCreateReviewsRequestInner.from_json(json)
# print the JSON string representation of the object
print(ReviewsCreateReviewsRequestInner.to_json())

# convert the object into a dict
reviews_create_reviews_request_inner_dict = reviews_create_reviews_request_inner_instance.to_dict()
# create an instance of ReviewsCreateReviewsRequestInner from a dict
reviews_create_reviews_request_inner_from_dict = ReviewsCreateReviewsRequestInner.from_dict(reviews_create_reviews_request_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


