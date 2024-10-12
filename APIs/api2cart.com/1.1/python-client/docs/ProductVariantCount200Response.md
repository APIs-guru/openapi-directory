# ProductVariantCount200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result** | [**ProductVariantCount200ResponseResult**](ProductVariantCount200ResponseResult.md) |  | [optional] 
**return_code** | **int** |  | [optional] 
**return_message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.product_variant_count200_response import ProductVariantCount200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantCount200Response from a JSON string
product_variant_count200_response_instance = ProductVariantCount200Response.from_json(json)
# print the JSON string representation of the object
print(ProductVariantCount200Response.to_json())

# convert the object into a dict
product_variant_count200_response_dict = product_variant_count200_response_instance.to_dict()
# create an instance of ProductVariantCount200Response from a dict
product_variant_count200_response_from_dict = ProductVariantCount200Response.from_dict(product_variant_count200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


