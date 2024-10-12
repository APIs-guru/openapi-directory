# OrderDeliveryDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**OrderAddress**](OrderAddress.md) |  | [optional] 
**phone_number** | **str** | The phone number of the person receiving the delivery. | [optional] 

## Example

```python
from openapi_client.models.order_delivery_details import OrderDeliveryDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OrderDeliveryDetails from a JSON string
order_delivery_details_instance = OrderDeliveryDetails.from_json(json)
# print the JSON string representation of the object
print(OrderDeliveryDetails.to_json())

# convert the object into a dict
order_delivery_details_dict = order_delivery_details_instance.to_dict()
# create an instance of OrderDeliveryDetails from a dict
order_delivery_details_from_dict = OrderDeliveryDetails.from_dict(order_delivery_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


