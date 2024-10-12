# SandboxScheduledPayment

Scheduled payment information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **float** | Amount | [optional] 
**description** | **str** | Scheduled payment&#39;s short description | [optional] 
**execution_date** | **datetime** | Scheduled payment&#39;s execution date | [optional] 
**sender_reference** | **str** | Debtor / Sender reference | [optional] 

## Example

```python
from openapi_client.models.sandbox_scheduled_payment import SandboxScheduledPayment

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxScheduledPayment from a JSON string
sandbox_scheduled_payment_instance = SandboxScheduledPayment.from_json(json)
# print the JSON string representation of the object
print(SandboxScheduledPayment.to_json())

# convert the object into a dict
sandbox_scheduled_payment_dict = sandbox_scheduled_payment_instance.to_dict()
# create an instance of SandboxScheduledPayment from a dict
sandbox_scheduled_payment_from_dict = SandboxScheduledPayment.from_dict(sandbox_scheduled_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


