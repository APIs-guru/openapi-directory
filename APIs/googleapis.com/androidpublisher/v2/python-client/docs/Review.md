# Review


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author_name** | **str** | The name of the user who wrote the review. | [optional] 
**comments** | [**List[Comment]**](Comment.md) | A repeated field containing comments for the review. | [optional] 
**review_id** | **str** | Unique identifier for this review. | [optional] 

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


