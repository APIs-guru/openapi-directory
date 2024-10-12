# OrdersSetLineItemMetadataRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[OrderMerchantProvidedAnnotation]**](OrderMerchantProvidedAnnotation.md) |  | [optional] 
**line_item_id** | **str** | The ID of the line item to set metadata. Either lineItemId or productId is required. | [optional] 
**operation_id** | **str** | The ID of the operation. Unique across all operations for a given order. | [optional] 
**product_id** | **str** | The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 

## Example

```python
from openapi_client.models.orders_set_line_item_metadata_request import OrdersSetLineItemMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersSetLineItemMetadataRequest from a JSON string
orders_set_line_item_metadata_request_instance = OrdersSetLineItemMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(OrdersSetLineItemMetadataRequest.to_json())

# convert the object into a dict
orders_set_line_item_metadata_request_dict = orders_set_line_item_metadata_request_instance.to_dict()
# create an instance of OrdersSetLineItemMetadataRequest from a dict
orders_set_line_item_metadata_request_from_dict = OrdersSetLineItemMetadataRequest.from_dict(orders_set_line_item_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


