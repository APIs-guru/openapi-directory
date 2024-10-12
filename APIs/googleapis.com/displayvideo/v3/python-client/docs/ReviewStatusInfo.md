# ReviewStatusInfo

Review statuses for the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approval_status** | **str** | Represents the basic approval needed for a creative to begin serving. Summary of creative_and_landing_page_review_status and content_and_policy_review_status. | [optional] 
**content_and_policy_review_status** | **str** | Content and policy review status for the creative. | [optional] 
**creative_and_landing_page_review_status** | **str** | Creative and landing page review status for the creative. | [optional] 
**exchange_review_statuses** | [**List[ExchangeReviewStatus]**](ExchangeReviewStatus.md) | Exchange review statuses for the creative. | [optional] 
**publisher_review_statuses** | [**List[PublisherReviewStatus]**](PublisherReviewStatus.md) | Publisher review statuses for the creative. | [optional] 

## Example

```python
from openapi_client.models.review_status_info import ReviewStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewStatusInfo from a JSON string
review_status_info_instance = ReviewStatusInfo.from_json(json)
# print the JSON string representation of the object
print(ReviewStatusInfo.to_json())

# convert the object into a dict
review_status_info_dict = review_status_info_instance.to_dict()
# create an instance of ReviewStatusInfo from a dict
review_status_info_from_dict = ReviewStatusInfo.from_dict(review_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


