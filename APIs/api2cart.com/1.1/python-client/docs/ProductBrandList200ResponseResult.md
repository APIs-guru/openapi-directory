# ProductBrandList200ResponseResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product** | [**List[Brand]**](Brand.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_brand_list200_response_result import ProductBrandList200ResponseResult

# TODO update the JSON string below
json = "{}"
# create an instance of ProductBrandList200ResponseResult from a JSON string
product_brand_list200_response_result_instance = ProductBrandList200ResponseResult.from_json(json)
# print the JSON string representation of the object
print(ProductBrandList200ResponseResult.to_json())

# convert the object into a dict
product_brand_list200_response_result_dict = product_brand_list200_response_result_instance.to_dict()
# create an instance of ProductBrandList200ResponseResult from a dict
product_brand_list200_response_result_from_dict = ProductBrandList200ResponseResult.from_dict(product_brand_list200_response_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


