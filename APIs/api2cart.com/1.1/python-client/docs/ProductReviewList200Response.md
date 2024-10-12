# ProductReviewList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductReviewList200ResponseResult**](ProductReviewList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_review_list200_response import ProductReviewList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductReviewList200Response from a JSON string
product_review_list200_response_instance = ProductReviewList200Response.from_json(json)
# print the JSON string representation of the object
print(ProductReviewList200Response.to_json())

# convert the object into a dict
product_review_list200_response_dict = product_review_list200_response_instance.to_dict()
# create an instance of ProductReviewList200Response from a dict
product_review_list200_response_from_dict = ProductReviewList200Response.from_dict(product_review_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


