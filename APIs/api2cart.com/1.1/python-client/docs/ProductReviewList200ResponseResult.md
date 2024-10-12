# ProductReviewList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reviews** | [**List[ProductReview]**](ProductReview.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.product_review_list200_response_result import ProductReviewList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductReviewList200ResponseResult from a JSON string
product_review_list200_response_result_instance = ProductReviewList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(ProductReviewList200ResponseResult.to_json())

# convert the object into a dict
product_review_list200_response_result_dict = product_review_list200_response_result_instance.to_dict()
# create an instance of ProductReviewList200ResponseResult from a dict
product_review_list200_response_result_from_dict = ProductReviewList200ResponseResult.from_dict(product_review_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


