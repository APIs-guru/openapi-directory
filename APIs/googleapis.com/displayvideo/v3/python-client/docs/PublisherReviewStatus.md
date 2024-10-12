# PublisherReviewStatus

Publisher review status for the creative.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**publisher_name** | **str** | The publisher reviewing the creative. | [optional] 
**status** | **str** | Status of the publisher review. | [optional] 

## Example

```python
from openapi_client.models.publisher_review_status import PublisherReviewStatus

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherReviewStatus from a JSON string
publisher_review_status_instance = PublisherReviewStatus.from_json(json)
# print the JSON string representation of the object
print(PublisherReviewStatus.to_json())

# convert the object into a dict
publisher_review_status_dict = publisher_review_status_instance.to_dict()
# create an instance of PublisherReviewStatus from a dict
publisher_review_status_from_dict = PublisherReviewStatus.from_dict(publisher_review_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


