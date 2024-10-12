# ProductResourcesPage

Holds an array of products and the next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ProductResource]**](ProductResource.md) | List of products. | [optional] 

## Example

```python
from openapi_client.models.product_resources_page import ProductResourcesPage

# TODO update the JSON string below
json = "{}"
# create an instance of ProductResourcesPage from a JSON string
product_resources_page_instance = ProductResourcesPage.from_json(json)
# print the JSON string representation of the object
print(ProductResourcesPage.to_json())

# convert the object into a dict
product_resources_page_dict = product_resources_page_instance.to_dict()
# create an instance of ProductResourcesPage from a dict
product_resources_page_from_dict = ProductResourcesPage.from_dict(product_resources_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


