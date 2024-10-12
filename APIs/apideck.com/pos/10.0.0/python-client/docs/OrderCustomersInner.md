# OrderCustomersInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | [**List[Email]**](Email.md) |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**middle_name** | **str** |  | [optional] 
**phone_numbers** | [**List[PhoneNumber]**](PhoneNumber.md) |  | [optional] 

## Example

```python
from openapi_client.models.order_customers_inner import OrderCustomersInner

# TODO update the JSON string below
json = "{}"
# create an instance of OrderCustomersInner from a JSON string
order_customers_inner_instance = OrderCustomersInner.from_json(json)
# print the JSON string representation of the object
print(OrderCustomersInner.to_json())

# convert the object into a dict
order_customers_inner_dict = order_customers_inner_instance.to_dict()
# create an instance of OrderCustomersInner from a dict
order_customers_inner_from_dict = OrderCustomersInner.from_dict(order_customers_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


