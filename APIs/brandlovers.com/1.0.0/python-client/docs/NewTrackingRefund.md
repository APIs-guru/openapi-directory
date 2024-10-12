# NewTrackingRefund


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier** | [**Courier**](Courier.md) |  | [optional] 
**cte** | **str** | Conhecimento do Transporte Eletrônico | [optional] 
**info** | **str** | Aditional information about this shippment | 
**items** | [**List[OrderItemReference]**](OrderItemReference.md) |  | 
**number** | **str** | Tracking Id in the courier | [optional] 
**occurred_at** | **datetime** | Date time that this was created | [optional] 
**seller_shipment_id** | **str** | Unique Seller shipment Id. This must be unique across all orders and shipments | [optional] 
**trancking_url** | **str** | Courier tracking URL | [optional] 

## Example

```python
from openapi_client.models.new_tracking_refund import NewTrackingRefund

# TODO update the JSON string below
json = "{}"
# create an instance of NewTrackingRefund from a JSON string
new_tracking_refund_instance = NewTrackingRefund.from_json(json)
# print the JSON string representation of the object
print(NewTrackingRefund.to_json())

# convert the object into a dict
new_tracking_refund_dict = new_tracking_refund_instance.to_dict()
# create an instance of NewTrackingRefund from a dict
new_tracking_refund_from_dict = NewTrackingRefund.from_dict(new_tracking_refund_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


