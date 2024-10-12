# GetLedgerAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**LedgerAccount**](LedgerAccount.md) |  | 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_ledger_account_response import GetLedgerAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetLedgerAccountResponse from a JSON string
get_ledger_account_response_instance = GetLedgerAccountResponse.from_json(json)
# print the JSON string representation of the object
print(GetLedgerAccountResponse.to_json())

# convert the object into a dict
get_ledger_account_response_dict = get_ledger_account_response_instance.to_dict()
# create an instance of GetLedgerAccountResponse from a dict
get_ledger_account_response_from_dict = GetLedgerAccountResponse.from_dict(get_ledger_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


