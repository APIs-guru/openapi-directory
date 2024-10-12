# ReviewSource

Information regarding the source of this review, when the review is not from a Google Books user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Name of the source. | [optional] 
**extra_description** | **str** | Extra text about the source of the review. | [optional] 
**url** | **str** | URL of the source of the review. | [optional] 

## Example

```python
from openapi_client.models.review_source import ReviewSource

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewSource from a JSON string
review_source_instance = ReviewSource.from_json(json)
# print the JSON string representation of the object
print(ReviewSource.to_json())

# convert the object into a dict
review_source_dict = review_source_instance.to_dict()
# create an instance of ReviewSource from a dict
review_source_from_dict = ReviewSource.from_dict(review_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


