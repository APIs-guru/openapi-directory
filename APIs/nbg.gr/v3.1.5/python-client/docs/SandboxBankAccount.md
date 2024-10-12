# SandboxBankAccount

Sandbox bank account

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**beneficiaries** | [**List[SandboxBeneficiary]**](SandboxBeneficiary.md) | List of account&#39;s beneficiaries | [optional] 
**info** | [**SandboxBankAccountInfo**](SandboxBankAccountInfo.md) |  | [optional] 
**party** | [**SandboxParty**](SandboxParty.md) |  | [optional] 
**scheduled_payments** | [**List[SandboxScheduledPayment]**](SandboxScheduledPayment.md) | List of account&#39;s scheduled payments | [optional] 
**standing_orders** | [**List[SandboxStandingOrder]**](SandboxStandingOrder.md) | List of account&#39;s standing orders | [optional] 
**statements** | [**List[SandboxStatement]**](SandboxStatement.md) | List of account&#39;s statements | [optional] 
**transactions** | [**List[SandboxTransaction]**](SandboxTransaction.md) | List of account&#39;s transactions | [optional] 

## Example

```python
from openapi_client.models.sandbox_bank_account import SandboxBankAccount

# TODO update the JSON string below
json = "{}"
# create an instance of SandboxBankAccount from a JSON string
sandbox_bank_account_instance = SandboxBankAccount.from_json(json)
# print the JSON string representation of the object
print(SandboxBankAccount.to_json())

# convert the object into a dict
sandbox_bank_account_dict = sandbox_bank_account_instance.to_dict()
# create an instance of SandboxBankAccount from a dict
sandbox_bank_account_from_dict = SandboxBankAccount.from_dict(sandbox_bank_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


