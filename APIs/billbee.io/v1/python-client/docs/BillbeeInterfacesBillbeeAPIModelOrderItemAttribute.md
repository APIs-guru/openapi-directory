# BillbeeInterfacesBillbeeAPIModelOrderItemAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The internal id of this attribute | [optional] 
**name** | **str** | The attribute name. E.g. color | [optional] 
**price** | **float** |  | [optional] 
**value** | **str** | The attribute value. E.g. red | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_order_item_attribute import BillbeeInterfacesBillbeeAPIModelOrderItemAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderItemAttribute from a JSON string
billbee_interfaces_billbee_api_model_order_item_attribute_instance = BillbeeInterfacesBillbeeAPIModelOrderItemAttribute.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelOrderItemAttribute.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_order_item_attribute_dict = billbee_interfaces_billbee_api_model_order_item_attribute_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelOrderItemAttribute from a dict
billbee_interfaces_billbee_api_model_order_item_attribute_from_dict = BillbeeInterfacesBillbeeAPIModelOrderItemAttribute.from_dict(billbee_interfaces_billbee_api_model_order_item_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


