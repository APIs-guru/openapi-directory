# Shippment


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**courier** | [**Courier**](Courier.md) |  | 
**cte** | **str** | Conhecimento de Transporte Eletrônico | [optional] 
**description** | **str** | Additinal shipment tracking information | [optional] 
**id** | **str** | Shipment Id associated with this shippment used to group diferent item or items from a single order | [optional] 
**invoice** | [**Invoice**](Invoice.md) |  | 
**items** | [**List[OrderItemReference]**](OrderItemReference.md) | List of items of this shippment | 
**number** | **str** | Courier unique trackign Id associated with this shipment | [optional] 
**occurred_at** | **datetime** | Date time when this shippment happened | 
**seller_shipment_id** | **str** | Unique Seller shipment Id. This must be unique across all orders and shipments | 
**status** | **str** | Shipment status | 
**tracking_url** | **str** | Courier tracking URL | [optional] 

## Example

```python
from openapi_client.models.shippment import Shippment

# TODO update the JSON string below
json = "{}"
# create an instance of Shippment from a JSON string
shippment_instance = Shippment.from_json(json)
# print the JSON string representation of the object
print(Shippment.to_json())

# convert the object into a dict
shippment_dict = shippment_instance.to_dict()
# create an instance of Shippment from a dict
shippment_from_dict = Shippment.from_dict(shippment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


