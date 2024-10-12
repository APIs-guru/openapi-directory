# StatementCreditActivationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**response** | [**ActivationResponse**](ActivationResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.statement_credit_activation_response import StatementCreditActivationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of StatementCreditActivationResponse from a JSON string
statement_credit_activation_response_instance = StatementCreditActivationResponse.from_json(json)
# print the JSON string representation of the object
print(StatementCreditActivationResponse.to_json())

# convert the object into a dict
statement_credit_activation_response_dict = statement_credit_activation_response_instance.to_dict()
# create an instance of StatementCreditActivationResponse from a dict
statement_credit_activation_response_from_dict = StatementCreditActivationResponse.from_dict(statement_credit_activation_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


