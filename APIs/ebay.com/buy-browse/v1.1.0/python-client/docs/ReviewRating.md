# ReviewRating

The type that defines the fields for the rating of a product review.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**average_rating** | **str** | The average rating given to a product based on customer reviews. | [optional] 
**rating_histograms** | [**List[RatingHistogram]**](RatingHistogram.md) | An array of containers for the product rating histograms that shows the review counts and the product rating. | [optional] 
**review_count** | **int** | The total number of reviews for the item. | [optional] 

## Example

```python
from openapi_client.models.review_rating import ReviewRating

# TODO update the JSON string below
json = "{}"
# create an instance of ReviewRating from a JSON string
review_rating_instance = ReviewRating.from_json(json)
# print the JSON string representation of the object
print(ReviewRating.to_json())

# convert the object into a dict
review_rating_dict = review_rating_instance.to_dict()
# create an instance of ReviewRating from a dict
review_rating_from_dict = ReviewRating.from_dict(review_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


