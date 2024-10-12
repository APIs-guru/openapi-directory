# ProductDetails

Details of the product to be transferred.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**product_id** | **str** | Id of product to be transferred. | [optional] 
**product_type** | [**ProductType**](ProductType.md) |  | [optional] 

## Example

```python
from openapi_client.models.product_details import ProductDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDetails from a JSON string
product_details_instance = ProductDetails.from_json(json)
# print the JSON string representation of the object
print(ProductDetails.to_json())

# convert the object into a dict
product_details_dict = product_details_instance.to_dict()
# create an instance of ProductDetails from a dict
product_details_from_dict = ProductDetails.from_dict(product_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


