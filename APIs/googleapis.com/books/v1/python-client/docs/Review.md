# Review


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**ReviewAuthor**](ReviewAuthor.md) |  | [optional] 
**content** | **str** | Review text. | [optional] 
**var_date** | **str** | Date of this review. | [optional] 
**full_text_url** | **str** | URL for the full review text, for reviews gathered from the web. | [optional] 
**kind** | **str** | Resource type for a review. | [optional] 
**rating** | **str** | Star rating for this review. Possible values are ONE, TWO, THREE, FOUR, FIVE or NOT_RATED. | [optional] 
**source** | [**ReviewSource**](ReviewSource.md) |  | [optional] 
**title** | **str** | Title for this review. | [optional] 
**type** | **str** | Source type for this review. Possible values are EDITORIAL, WEB_USER or GOOGLE_USER. | [optional] 
**volume_id** | **str** | Volume that this review is for. | [optional] 

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


