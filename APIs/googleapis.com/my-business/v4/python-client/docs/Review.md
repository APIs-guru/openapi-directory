# Review

Output only. Represents a review for a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comment** | **str** | The body of the review as plain text with markups. | [optional] 
**create_time** | **str** | The timestamp for when the review was written. | [optional] 
**name** | **str** | The resource name. For Review it is of the form &#x60;accounts/{account_id}/locations/{location_id}/reviews/{review_id}&#x60; | [optional] 
**review_id** | **str** | The encrypted unique identifier. | [optional] 
**review_reply** | [**ReviewReply**](ReviewReply.md) |  | [optional] 
**reviewer** | [**Reviewer**](Reviewer.md) |  | [optional] 
**star_rating** | **str** | The star rating of the review. | [optional] 
**update_time** | **str** | The timestamp for when the review was last modified. | [optional] 

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


