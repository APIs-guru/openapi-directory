# PeriodicPaymentRequest

Periodic Payment Serializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_of_execution** | **str** |  | [optional] 
**end_date** | **date** |  | [optional] 
**execution_rule** | [**ExecutionRuleEnum**](ExecutionRuleEnum.md) | Behavior when periodic payment dates fall on holiday.  * &#x60;following&#x60; - following * &#x60;preceding&#x60; - preceding | [optional] 
**frequency** | [**FrequencyEnum**](FrequencyEnum.md) |  | [optional] 
**start_date** | **date** |  | 

## Example

```python
from openapi_client.models.periodic_payment_request import PeriodicPaymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PeriodicPaymentRequest from a JSON string
periodic_payment_request_instance = PeriodicPaymentRequest.from_json(json)
# print the JSON string representation of the object
print(PeriodicPaymentRequest.to_json())

# convert the object into a dict
periodic_payment_request_dict = periodic_payment_request_instance.to_dict()
# create an instance of PeriodicPaymentRequest from a dict
periodic_payment_request_from_dict = PeriodicPaymentRequest.from_dict(periodic_payment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


