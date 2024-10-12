# ProductImageAdd


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **str** | Content(body) encoded in base64 of image file | [optional] 
**image_name** | **str** | Defines image&#39;s name | 
**label** | **str** | Defines alternative text that has to be attached to the picture | [optional] 
**lang_id** | **str** | Add product image on specified language id | [optional] 
**mime** | **str** | Mime type of image http://en.wikipedia.org/wiki/Internet_media_type. | [optional] 
**position** | **int** | Defines image’s position in the list | [optional] [default to 0]
**product_id** | **str** | Defines product id where the image should be added | [optional] 
**product_variant_id** | **int** | Defines product&#39;s variants specified by variant id | [optional] 
**store_id** | **str** | Store Id | [optional] 
**type** | **str** | Defines image&#39;s types that are specified by comma-separated list | 
**url** | **str** | Defines URL of the image that has to be added | [optional] 
**variant_ids** | **str** | Defines product&#39;s variants ids | [optional] 

## Example

```python
from openapi_client.models.product_image_add import ProductImageAdd

# TODO update the JSON string below
json = "{}"
# create an instance of ProductImageAdd from a JSON string
product_image_add_instance = ProductImageAdd.from_json(json)
# print the JSON string representation of the object
print(ProductImageAdd.to_json())

# convert the object into a dict
product_image_add_dict = product_image_add_instance.to_dict()
# create an instance of ProductImageAdd from a dict
product_image_add_from_dict = ProductImageAdd.from_dict(product_image_add_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


