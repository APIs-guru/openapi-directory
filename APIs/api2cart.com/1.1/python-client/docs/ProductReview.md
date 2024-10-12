# ProductReview


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**created_time** | [**A2CDateTime**](A2CDateTime.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**customer_id** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**message** | **str** |  | [optional] 
**nick_name** | **str** |  | [optional] 
**product_id** | **str** |  | [optional] 
**rating** | **float** |  | [optional] 
**ratings** | [**List[ProductReviewRating]**](ProductReviewRating.md) |  | [optional] 
**status** | **str** |  | [optional] 
**summary** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_review import ProductReview

# TODO update the JSON string below
json = "{}"
# create an instance of ProductReview from a JSON string
product_review_instance = ProductReview.from_json(json)
# print the JSON string representation of the object
print(ProductReview.to_json())

# convert the object into a dict
product_review_dict = product_review_instance.to_dict()
# create an instance of ProductReview from a dict
product_review_from_dict = ProductReview.from_dict(product_review_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


