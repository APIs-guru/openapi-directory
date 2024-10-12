# OrderDocument

Contains properties of a Planning order document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of this order document. | [optional] 
**advertiser_id** | **str** | Advertiser ID of this order document. | [optional] 
**amended_order_document_id** | **str** | The amended order document ID of this order document. An order document can be created by optionally amending another order document so that the change history can be preserved. | [optional] 
**approved_by_user_profile_ids** | **List[str]** | IDs of users who have approved this order document. | [optional] 
**cancelled** | **bool** | Whether this order document is cancelled. | [optional] 
**created_info** | [**LastModifiedInfo**](LastModifiedInfo.md) |  | [optional] 
**effective_date** | **date** |  | [optional] 
**id** | **str** | ID of this order document. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#orderDocument\&quot;. | [optional] 
**last_sent_recipients** | **List[str]** | List of email addresses that received the last sent document. | [optional] 
**last_sent_time** | **datetime** |  | [optional] 
**order_id** | **str** | ID of the order from which this order document is created. | [optional] 
**project_id** | **str** | Project ID of this order document. | [optional] 
**signed** | **bool** | Whether this order document has been signed. | [optional] 
**subaccount_id** | **str** | Subaccount ID of this order document. | [optional] 
**title** | **str** | Title of this order document. | [optional] 
**type** | **str** | Type of this order document | [optional] 

## Example

```python
from openapi_client.models.order_document import OrderDocument

# TODO update the JSON string below
json = "{}"
# create an instance of OrderDocument from a JSON string
order_document_instance = OrderDocument.from_json(json)
# print the JSON string representation of the object
print(OrderDocument.to_json())

# convert the object into a dict
order_document_dict = order_document_instance.to_dict()
# create an instance of OrderDocument from a dict
order_document_from_dict = OrderDocument.from_dict(order_document_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


