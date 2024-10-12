# ProductReviewRating


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**value** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.product_review_rating import ProductReviewRating

# TODO update the JSON string below
json = "{}"
# create an instance of ProductReviewRating from a JSON string
product_review_rating_instance = ProductReviewRating.from_json(json)
# print the JSON string representation of the object
print(ProductReviewRating.to_json())

# convert the object into a dict
product_review_rating_dict = product_review_rating_instance.to_dict()
# create an instance of ProductReviewRating from a dict
product_review_rating_from_dict = ProductReviewRating.from_dict(product_review_rating_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


