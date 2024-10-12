# PeriodicPayment

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
from openapi_client.models.periodic_payment import PeriodicPayment

# TODO update the JSON string below
json = "{}"
# create an instance of PeriodicPayment from a JSON string
periodic_payment_instance = PeriodicPayment.from_json(json)
# print the JSON string representation of the object
print(PeriodicPayment.to_json())

# convert the object into a dict
periodic_payment_dict = periodic_payment_instance.to_dict()
# create an instance of PeriodicPayment from a dict
periodic_payment_from_dict = PeriodicPayment.from_dict(periodic_payment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


