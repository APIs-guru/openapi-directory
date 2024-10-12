# OrderProperties

Order properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contact_information** | [**ContactDetails**](ContactDetails.md) |  | 
**current_status** | [**OrderStatus**](OrderStatus.md) |  | [optional] 
**delivery_tracking_info** | [**List[TrackingInfo]**](TrackingInfo.md) | Tracking information for the package delivered to the customer whether it has an original or a replacement device. | [optional] [readonly] 
**order_history** | [**List[OrderStatus]**](OrderStatus.md) | List of status changes in the order. | [optional] [readonly] 
**return_tracking_info** | [**List[TrackingInfo]**](TrackingInfo.md) | Tracking information for the package returned from the customer whether it has an original or a replacement device. | [optional] [readonly] 
**serial_number** | **str** | Serial number of the device. | [optional] [readonly] 
**shipping_address** | [**Address**](Address.md) |  | 

## Example

```python
from openapi_client.models.order_properties import OrderProperties

# TODO update the JSON string below
json = "{}"
# create an instance of OrderProperties from a JSON string
order_properties_instance = OrderProperties.from_json(json)
# print the JSON string representation of the object
print(OrderProperties.to_json())

# convert the object into a dict
order_properties_dict = order_properties_instance.to_dict()
# create an instance of OrderProperties from a dict
order_properties_from_dict = OrderProperties.from_dict(order_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


