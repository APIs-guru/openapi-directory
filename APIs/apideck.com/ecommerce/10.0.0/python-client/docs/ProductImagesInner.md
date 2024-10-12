# ProductImagesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**url** | **str** | The URL of an image of the product. | [optional] 

## Example

```python
from openapi_client.models.product_images_inner import ProductImagesInner

# TODO update the JSON string below
json = "{}"
# create an instance of ProductImagesInner from a JSON string
product_images_inner_instance = ProductImagesInner.from_json(json)
# print the JSON string representation of the object
print(ProductImagesInner.to_json())

# convert the object into a dict
product_images_inner_dict = product_images_inner_instance.to_dict()
# create an instance of ProductImagesInner from a dict
product_images_inner_from_dict = ProductImagesInner.from_dict(product_images_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


