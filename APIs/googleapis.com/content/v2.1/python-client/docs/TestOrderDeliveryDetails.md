# TestOrderDeliveryDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | [**TestOrderAddress**](TestOrderAddress.md) |  | [optional] 
**is_scheduled_delivery** | **bool** | Whether the order is scheduled delivery order. | [optional] 
**phone_number** | **str** | The phone number of the person receiving the delivery. | [optional] 

## Example

```python
from openapi_client.models.test_order_delivery_details import TestOrderDeliveryDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestOrderDeliveryDetails from a JSON string
test_order_delivery_details_instance = TestOrderDeliveryDetails.from_json(json)
# print the JSON string representation of the object
print(TestOrderDeliveryDetails.to_json())

# convert the object into a dict
test_order_delivery_details_dict = test_order_delivery_details_instance.to_dict()
# create an instance of TestOrderDeliveryDetails from a dict
test_order_delivery_details_from_dict = TestOrderDeliveryDetails.from_dict(test_order_delivery_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


