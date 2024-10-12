# BulkUpdateLineItemsRequest

Request message for LineItemService.BulkUpdateLineItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**line_item_ids** | **List[str]** | Required. IDs of line items to update. | [optional] 
**target_line_item** | [**LineItem**](LineItem.md) |  | [optional] 
**update_mask** | **str** | Required. A field mask identifying which fields to update. Only the following fields are currently supported: * entityStatus | [optional] 

## Example

```python
from openapi_client.models.bulk_update_line_items_request import BulkUpdateLineItemsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateLineItemsRequest from a JSON string
bulk_update_line_items_request_instance = BulkUpdateLineItemsRequest.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateLineItemsRequest.to_json())

# convert the object into a dict
bulk_update_line_items_request_dict = bulk_update_line_items_request_instance.to_dict()
# create an instance of BulkUpdateLineItemsRequest from a dict
bulk_update_line_items_request_from_dict = BulkUpdateLineItemsRequest.from_dict(bulk_update_line_items_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


