# ProductAspect


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aspect_name** | **str** | Deprecated. | [optional] 
**destination_name** | **str** | Deprecated. | [optional] 
**intention** | **str** | Deprecated. | [optional] 

## Example

```python
from openapi_client.models.product_aspect import ProductAspect

# TODO update the JSON string below
json = "{}"
# create an instance of ProductAspect from a JSON string
product_aspect_instance = ProductAspect.from_json(json)
# print the JSON string representation of the object
print(ProductAspect.to_json())

# convert the object into a dict
product_aspect_dict = product_aspect_instance.to_dict()
# create an instance of ProductAspect from a dict
product_aspect_from_dict = ProductAspect.from_dict(product_aspect_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


