# PaymentHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_rate** | **float** |  | [optional] 
**var_date** | **date** |  | 
**payment_method** | [**PaymentMethod**](PaymentMethod.md) |  | 
**price** | **float** |  | 
**voucher_number** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.payment_history import PaymentHistory

# TODO update the JSON string below
json = "{}"
# create an instance of PaymentHistory from a JSON string
payment_history_instance = PaymentHistory.from_json(json)
# print the JSON string representation of the object
print(PaymentHistory.to_json())

# convert the object into a dict
payment_history_dict = payment_history_instance.to_dict()
# create an instance of PaymentHistory from a dict
payment_history_from_dict = PaymentHistory.from_dict(payment_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


