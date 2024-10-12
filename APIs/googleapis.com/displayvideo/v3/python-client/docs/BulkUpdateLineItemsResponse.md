# BulkUpdateLineItemsResponse

Response message for LineItemService.BulkUpdateLineItems.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**List[Status]**](Status.md) | Errors returned by line items that failed to update. | [optional] 
**failed_line_item_ids** | **List[str]** | The IDs of line items that failed to update. | [optional] 
**skipped_line_item_ids** | **List[str]** | The IDs of line items that are skipped for updates. For example, unnecessary mutates that will result in effectively no changes to line items will be skipped and corresponding line item IDs can be tracked here. | [optional] 
**updated_line_item_ids** | **List[str]** | The IDs of successfully updated line items. | [optional] 

## Example

```python
from openapi_client.models.bulk_update_line_items_response import BulkUpdateLineItemsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BulkUpdateLineItemsResponse from a JSON string
bulk_update_line_items_response_instance = BulkUpdateLineItemsResponse.from_json(json)
# print the JSON string representation of the object
print(BulkUpdateLineItemsResponse.to_json())

# convert the object into a dict
bulk_update_line_items_response_dict = bulk_update_line_items_response_instance.to_dict()
# create an instance of BulkUpdateLineItemsResponse from a dict
bulk_update_line_items_response_from_dict = BulkUpdateLineItemsResponse.from_dict(bulk_update_line_items_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


