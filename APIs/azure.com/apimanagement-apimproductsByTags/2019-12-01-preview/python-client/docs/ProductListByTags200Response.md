# ProductListByTags200Response

Paged Tag list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductListByTags200ResponseValueInner]**](ProductListByTags200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_list_by_tags200_response import ProductListByTags200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByTags200Response from a JSON string
product_list_by_tags200_response_instance = ProductListByTags200Response.from_json(json)
# print the JSON string representation of the object
print(ProductListByTags200Response.to_json())

# convert the object into a dict
product_list_by_tags200_response_dict = product_list_by_tags200_response_instance.to_dict()
# create an instance of ProductListByTags200Response from a dict
product_list_by_tags200_response_from_dict = ProductListByTags200Response.from_dict(product_list_by_tags200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


