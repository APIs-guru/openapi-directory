# BankResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Bank**](Bank.md) |  | [optional] 

## Example

```python
from openapi_client.models.bank_response import BankResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BankResponse from a JSON string
bank_response_instance = BankResponse.from_json(json)
# print the JSON string representation of the object
print(BankResponse.to_json())

# convert the object into a dict
bank_response_dict = bank_response_instance.to_dict()
# create an instance of BankResponse from a dict
bank_response_from_dict = BankResponse.from_dict(bank_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


