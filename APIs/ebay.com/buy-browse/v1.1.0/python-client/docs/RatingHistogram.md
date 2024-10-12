# RatingHistogram

The type that defines the fields for product ratings. Only products that are in the eBay product catalog can be reviewed and rated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | The total number of user ratings that the product has received. | [optional] 
**rating** | **str** | This is the average rating for the product. As part of a product review, users rate the product. Products are rated from one star (terrible) to five stars (excellent), with each star having a corresponding point value - one star gets 1 point, two stars get 2 points, and so on. If a product had one four-star rating and one five-star rating, its average rating would be 4.5, and this is the value that would appear in this field. | [optional] 

## Example

```python
from openapi_client.models.rating_histogram import RatingHistogram

# TODO update the JSON string below
json = "{}"
# create an instance of RatingHistogram from a JSON string
rating_histogram_instance = RatingHistogram.from_json(json)
# print the JSON string representation of the object
print(RatingHistogram.to_json())

# convert the object into a dict
rating_histogram_dict = rating_histogram_instance.to_dict()
# create an instance of RatingHistogram from a dict
rating_histogram_from_dict = RatingHistogram.from_dict(rating_histogram_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


