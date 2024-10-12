# LinkedEcommerceOrder

The order this entity is linked to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**status** | [**EcommerceOrderStatus**](EcommerceOrderStatus.md) |  | [optional] 
**total** | **str** | The total amount of the order. | [optional] 

## Example

```python
from openapi_client.models.linked_ecommerce_order import LinkedEcommerceOrder

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedEcommerceOrder from a JSON string
linked_ecommerce_order_instance = LinkedEcommerceOrder.from_json(json)
# print the JSON string representation of the object
print(LinkedEcommerceOrder.to_json())

# convert the object into a dict
linked_ecommerce_order_dict = linked_ecommerce_order_instance.to_dict()
# create an instance of LinkedEcommerceOrder from a dict
linked_ecommerce_order_from_dict = LinkedEcommerceOrder.from_dict(linked_ecommerce_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


