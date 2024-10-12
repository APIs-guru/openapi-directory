# OrdersCustomBatchRequestEntrySetLineItemMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotations** | [**List[OrderMerchantProvidedAnnotation]**](OrderMerchantProvidedAnnotation.md) |  | [optional] 
**line_item_id** | **str** | The ID of the line item to set metadata. Either lineItemId or productId is required. | [optional] 
**product_id** | **str** | The ID of the product to set metadata. This is the REST ID used in the products service. Either lineItemId or productId is required. | [optional] 

## Example

```python
from openapi_client.models.orders_custom_batch_request_entry_set_line_item_metadata import OrdersCustomBatchRequestEntrySetLineItemMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of OrdersCustomBatchRequestEntrySetLineItemMetadata from a JSON string
orders_custom_batch_request_entry_set_line_item_metadata_instance = OrdersCustomBatchRequestEntrySetLineItemMetadata.from_json(json)
# print the JSON string representation of the object
print(OrdersCustomBatchRequestEntrySetLineItemMetadata.to_json())

# convert the object into a dict
orders_custom_batch_request_entry_set_line_item_metadata_dict = orders_custom_batch_request_entry_set_line_item_metadata_instance.to_dict()
# create an instance of OrdersCustomBatchRequestEntrySetLineItemMetadata from a dict
orders_custom_batch_request_entry_set_line_item_metadata_from_dict = OrdersCustomBatchRequestEntrySetLineItemMetadata.from_dict(orders_custom_batch_request_entry_set_line_item_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


