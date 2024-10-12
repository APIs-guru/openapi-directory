# DeliveryCost

This type contains a breakdown of all costs associated with the fulfillment of a line item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_amount** | [**Amount**](Amount.md) |  | [optional] 
**handling_cost** | [**Amount**](Amount.md) |  | [optional] 
**import_charges** | [**Amount**](Amount.md) |  | [optional] 
**shipping_cost** | [**Amount**](Amount.md) |  | [optional] 
**shipping_intermediation_fee** | [**Amount**](Amount.md) |  | [optional] 

## Example

```python
from openapi_client.models.delivery_cost import DeliveryCost

# TODO update the JSON string below
json = "{}"
# create an instance of DeliveryCost from a JSON string
delivery_cost_instance = DeliveryCost.from_json(json)
# print the JSON string representation of the object
print(DeliveryCost.to_json())

# convert the object into a dict
delivery_cost_dict = delivery_cost_instance.to_dict()
# create an instance of DeliveryCost from a dict
delivery_cost_from_dict = DeliveryCost.from_dict(delivery_cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


