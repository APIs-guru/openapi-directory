# ProductListByService200Response

Paged Products list representation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Next page link if any. | [optional] 
**value** | [**List[ProductListByService200ResponseValueInner]**](ProductListByService200ResponseValueInner.md) | Page values. | [optional] 

## Example

```python
from openapi_client.models.product_list_by_service200_response import ProductListByService200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ProductListByService200Response from a JSON string
product_list_by_service200_response_instance = ProductListByService200Response.from_json(json)
# print the JSON string representation of the object
print(ProductListByService200Response.to_json())

# convert the object into a dict
product_list_by_service200_response_dict = product_list_by_service200_response_instance.to_dict()
# create an instance of ProductListByService200Response from a dict
product_list_by_service200_response_from_dict = ProductListByService200Response.from_dict(product_list_by_service200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


