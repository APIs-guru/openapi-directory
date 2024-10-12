# SandboxStandingOrder

Standing order information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Standing order amount | [optional] 
**description** | **str** | Standing order short description | [optional] 
**final_payment_date** | **datetime** | Standing order final collection date | [optional] 
**first_payment_date** | **datetime** | Standing order first collection date | [optional] 
**frequency** | **str** | Standing order frequency | 
**last_payment_date** | **datetime** | Standing order last executed payment date | [optional] 
**next_payment_date** | **datetime** | Standing order next collection date | [optional] 
**status** | **str** | Standing order status (Active, Inactive) | [optional] 

## Example

```python
from openapi_client.models.sandbox_standing_order import SandboxStandingOrder

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxStandingOrder from a JSON string
sandbox_standing_order_instance = SandboxStandingOrder.from_json(json)
# print the JSON string representation of the object
print(SandboxStandingOrder.to_json())

# convert the object into a dict
sandbox_standing_order_dict = sandbox_standing_order_instance.to_dict()
# create an instance of SandboxStandingOrder from a dict
sandbox_standing_order_from_dict = SandboxStandingOrder.from_dict(sandbox_standing_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


