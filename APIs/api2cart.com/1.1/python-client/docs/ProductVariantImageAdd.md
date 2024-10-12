# ProductVariantImageAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Content(body) encoded in base64 of image file | [optional] 
**image_name** | **str** | Defines image&#39;s name | 
**label** | **str** | Defines alternative text that has to be attached to the picture | [optional] 
**mime** | **str** | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | [optional] 
**option_id** | **str** | Defines option id of the product variant for which the image will be added | [optional] 
**position** | **int** | Defines image’s position in the list | [optional] [default to 0]
**product_id** | **str** | Defines product id where the variant image has to be added | [optional] 
**product_variant_id** | **int** | Defines product&#39;s variants specified by variant id | 
**store_id** | **str** | Store Id | [optional] 
**type** | **str** | Defines image&#39;s types that are specified by comma-separated list | [default to 'base']
**url** | **str** | Defines URL of the image that has to be added | [optional] 

## Example

```python
from openapi_client.models.product_variant_image_add import ProductVariantImageAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductVariantImageAdd from a JSON string
product_variant_image_add_instance = ProductVariantImageAdd.from_json(json)
# print the JSON string representation of the object
print(ProductVariantImageAdd.to_json())

# convert the object into a dict
product_variant_image_add_dict = product_variant_image_add_instance.to_dict()
# create an instance of ProductVariantImageAdd from a dict
product_variant_image_add_from_dict = ProductVariantImageAdd.from_dict(product_variant_image_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


