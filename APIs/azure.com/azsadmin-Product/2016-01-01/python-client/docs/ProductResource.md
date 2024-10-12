# ProductResource

Product resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Product**](Product.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource | [optional] [readonly] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key value pairs. | [optional] [readonly] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_resource import ProductResource

# TODO update the JSON string below
json = "{}"
# create an instance of ProductResource from a JSON string
product_resource_instance = ProductResource.from_json(json)
# print the JSON string representation of the object
print(ProductResource.to_json())

# convert the object into a dict
product_resource_dict = product_resource_instance.to_dict()
# create an instance of ProductResource from a dict
product_resource_from_dict = ProductResource.from_dict(product_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


