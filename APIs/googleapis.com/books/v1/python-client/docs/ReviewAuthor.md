# ReviewAuthor

Author of this review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Name of this person. | [optional] 

## Example

```python
from openapi_client.models.review_author import ReviewAuthor

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewAuthor from a JSON string
review_author_instance = ReviewAuthor.from_json(json)
# print the JSON string representation of the object
print(ReviewAuthor.to_json())

# convert the object into a dict
review_author_dict = review_author_instance.to_dict()
# create an instance of ReviewAuthor from a dict
review_author_from_dict = ReviewAuthor.from_dict(review_author_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


