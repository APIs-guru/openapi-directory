# OrderreturnsRejectOperation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason for the return. | [optional] 
**reason_text** | **str** | The explanation of the reason. | [optional] 

## Example

```python
from openapi_client.models.orderreturns_reject_operation import OrderreturnsRejectOperation

# TODO update the JSON string below
json = "{}"
# create an instance of OrderreturnsRejectOperation from a JSON string
orderreturns_reject_operation_instance = OrderreturnsRejectOperation.from_json(json)
# print the JSON string representation of the object
print(OrderreturnsRejectOperation.to_json())

# convert the object into a dict
orderreturns_reject_operation_dict = orderreturns_reject_operation_instance.to_dict()
# create an instance of OrderreturnsRejectOperation from a dict
orderreturns_reject_operation_from_dict = OrderreturnsRejectOperation.from_dict(orderreturns_reject_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


