# OrderPrint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**material** | [**Material**](Material.md) |  | [optional] 
**model** | [**Model**](Model.md) |  | [optional] 
**quantity** | **int** | The number of prints requested for this model and material pair. | [optional] 
**units** | **str** | Units for the requested print. One of \&quot;mm\&quot;, \&quot;cm\&quot;, or \&quot;in\&quot;. | [optional] 

## Example

```python
from openapi_client.models.order_print import OrderPrint

# TODO update the JSON string below
json = "{}"
# create an instance of OrderPrint from a JSON string
order_print_instance = OrderPrint.from_json(json)
# print the JSON string representation of the object
print(OrderPrint.to_json())

# convert the object into a dict
order_print_dict = order_print_instance.to_dict()
# create an instance of OrderPrint from a dict
order_print_from_dict = OrderPrint.from_dict(order_print_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


