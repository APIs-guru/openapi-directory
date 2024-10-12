# Review

A single review in a VR Listing. NEXT ID: 10

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** | The author of the review. | [optional] 
**body** | **str** | The body of the review. | [optional] 
**language_code** | **str** | Language of the review, such as \&quot;en\&quot;, \&quot;de\&quot;, etc. | [optional] 
**link** | **str** | The url of the review. | [optional] 
**rating** | [**List[Rating]**](Rating.md) | Any ratings associated with this review. This is repeated because reviews can include ratings on different aspects of a listing, e.g. location, cleanliness, etc. | [optional] 
**review_time** | **str** | Unix timestamp (in seconds) of the review, in UTC+0. | [optional] 
**title** | **str** | The title of the review, for example: Great three bedrooms. | [optional] 
**type** | **str** | The type of the review. | [optional] 
**visit_time** | **str** | Unix timestamp (in seconds) of when the stay was, in UTC+0. | [optional] 

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


