# SettlementCurrencyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**SettlementCurrency**](SettlementCurrency.md) |  | [optional] 
**var_date** | **str** | The date and time the API is being called in GMT. | [optional] 
**description** | **str** | The description of the API being called. | [optional] 
**name** | **str** | The name of the service being requested. | [optional] 

## Example

```python
from openapi_client.models.settlement_currency_request import SettlementCurrencyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SettlementCurrencyRequest from a JSON string
settlement_currency_request_instance = SettlementCurrencyRequest.from_json(json)
# print the JSON string representation of the object
print(SettlementCurrencyRequest.to_json())

# convert the object into a dict
settlement_currency_request_dict = settlement_currency_request_instance.to_dict()
# create an instance of SettlementCurrencyRequest from a dict
settlement_currency_request_from_dict = SettlementCurrencyRequest.from_dict(settlement_currency_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


