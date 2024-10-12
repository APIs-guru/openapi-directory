# Review

The Review object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_endpoint** | **str** | The callback endpoint. | [optional] 
**content** | **str** | The content value. | [optional] 
**content_id** | **str** | Id of the content. | [optional] 
**created_by** | **str** | The reviewer name. | [optional] 
**metadata** | [**List[KeyValuePair]**](KeyValuePair.md) | Array of KeyValue. | [optional] 
**review_id** | **str** | Id of the review. | [optional] 
**reviewer_result_tags** | [**List[KeyValuePair]**](KeyValuePair.md) | Array of KeyValue with Reviewer set Tags. | [optional] 
**status** | **str** | The status string (&lt;Pending, Complete&gt;). | [optional] 
**sub_team** | **str** | Name of the subteam. | [optional] 
**type** | **str** | The type of content. | [optional] 

## Example

```python
from openapi_client.models.review import Review

# TODO update the JSON string below
json = "{}"
# create an instance of Review from a JSON string
review_instance = Review.from_json(json)
# print the JSON string representation of the object
print(Review.to_json())

# convert the object into a dict
review_dict = review_instance.to_dict()
# create an instance of Review from a dict
review_from_dict = Review.from_dict(review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


