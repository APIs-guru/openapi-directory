# ProductStatusUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Defines if this product is ready for sale. Active &#x60;true&#x60;, disabled &#x60;false&#x60; | 
**sku_seller_id** | **str** | Seller product unique Id that will be updated | 

## Example

```python
from openapi_client.models.product_status_update import ProductStatusUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of ProductStatusUpdate from a JSON string
product_status_update_instance = ProductStatusUpdate.from_json(json)
# print the JSON string representation of the object
print(ProductStatusUpdate.to_json())

# convert the object into a dict
product_status_update_dict = product_status_update_instance.to_dict()
# create an instance of ProductStatusUpdate from a dict
product_status_update_from_dict = ProductStatusUpdate.from_dict(product_status_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


