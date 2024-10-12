# OrderFulfillmentsInnerPickupDetailsRecipient


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**Address**](Address.md) |  | [optional] 
**customer_id** | **str** |  | [optional] 
**display_name** | **str** |  | [optional] 
**email** | [**Email**](Email.md) |  | [optional] 
**phone_number** | [**PhoneNumber**](PhoneNumber.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_fulfillments_inner_pickup_details_recipient import OrderFulfillmentsInnerPickupDetailsRecipient

# TODO update the JSON string below
json = "{}"
# create an instance of OrderFulfillmentsInnerPickupDetailsRecipient from a JSON string
order_fulfillments_inner_pickup_details_recipient_instance = OrderFulfillmentsInnerPickupDetailsRecipient.from_json(json)
# print the JSON string representation of the object
print(OrderFulfillmentsInnerPickupDetailsRecipient.to_json())

# convert the object into a dict
order_fulfillments_inner_pickup_details_recipient_dict = order_fulfillments_inner_pickup_details_recipient_instance.to_dict()
# create an instance of OrderFulfillmentsInnerPickupDetailsRecipient from a dict
order_fulfillments_inner_pickup_details_recipient_from_dict = OrderFulfillmentsInnerPickupDetailsRecipient.from_dict(order_fulfillments_inner_pickup_details_recipient_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


