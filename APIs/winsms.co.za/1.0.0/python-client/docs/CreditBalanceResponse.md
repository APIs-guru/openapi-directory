# CreditBalanceResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credit_balance** | **float** | The current remaining credit balance for the account. Contains a single decimal place | [optional] 
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.credit_balance_response import CreditBalanceResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreditBalanceResponse from a JSON string
credit_balance_response_instance = CreditBalanceResponse.from_json(json)
# print the JSON string representation of the object
print(CreditBalanceResponse.to_json())

# convert the object into a dict
credit_balance_response_dict = credit_balance_response_instance.to_dict()
# create an instance of CreditBalanceResponse from a dict
credit_balance_response_from_dict = CreditBalanceResponse.from_dict(credit_balance_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


