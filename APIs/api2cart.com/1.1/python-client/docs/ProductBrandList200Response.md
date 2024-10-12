# ProductBrandList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductBrandList200ResponseResult**](ProductBrandList200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_brand_list200_response import ProductBrandList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductBrandList200Response from a JSON string
product_brand_list200_response_instance = ProductBrandList200Response.from_json(json)
# print the JSON string representation of the object
print(ProductBrandList200Response.to_json())

# convert the object into a dict
product_brand_list200_response_dict = product_brand_list200_response_instance.to_dict()
# create an instance of ProductBrandList200Response from a dict
product_brand_list200_response_from_dict = ProductBrandList200Response.from_dict(product_brand_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


