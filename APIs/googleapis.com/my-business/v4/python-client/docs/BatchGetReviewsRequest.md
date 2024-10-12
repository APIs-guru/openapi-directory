# BatchGetReviewsRequest

Request message for Reviews.BatchGetReviews.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ignore_rating_only_reviews** | **bool** | Whether to ignore rating-only reviews. | [optional] 
**location_names** | **List[str]** | A collection of locations to fetch reviews for, specified by their names. | [optional] 
**order_by** | **str** | Optional. Specifies the field to sort reviews by. If unspecified, the order of reviews returned will default to &#x60;update_time desc&#x60;. Valid orders to sort by are &#x60;rating&#x60;, &#x60;rating desc&#x60; and &#x60;update_time desc&#x60;. &#x60;rating&#x60; will return reviews in ascending order. &#x60;update_time&#x60;(i.e. ascending order) is not supported. | [optional] 
**page_size** | **int** | How many reviews to fetch per page. The default value is 200. | [optional] 
**page_token** | **str** | If specified, it fetches the next page of reviews. | [optional] 

## Example

```python
from openapi_client.models.batch_get_reviews_request import BatchGetReviewsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchGetReviewsRequest from a JSON string
batch_get_reviews_request_instance = BatchGetReviewsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchGetReviewsRequest.to_json())

# convert the object into a dict
batch_get_reviews_request_dict = batch_get_reviews_request_instance.to_dict()
# create an instance of BatchGetReviewsRequest from a dict
batch_get_reviews_request_from_dict = BatchGetReviewsRequest.from_dict(batch_get_reviews_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


