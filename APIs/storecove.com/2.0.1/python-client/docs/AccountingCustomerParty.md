# AccountingCustomerParty

The customer receiving the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**party** | [**Party**](Party.md) |  | 
**public_identifiers** | [**List[PublicIdentifier]**](PublicIdentifier.md) | A list of legal and tax identifiers for this customer. | [optional] 

## Example

```python
from openapi_client.models.accounting_customer_party import AccountingCustomerParty

# TODO update the JSON string below
json = "{}"
# create an instance of AccountingCustomerParty from a JSON string
accounting_customer_party_instance = AccountingCustomerParty.from_json(json)
# print the JSON string representation of the object
print(AccountingCustomerParty.to_json())

# convert the object into a dict
accounting_customer_party_dict = accounting_customer_party_instance.to_dict()
# create an instance of AccountingCustomerParty from a dict
accounting_customer_party_from_dict = AccountingCustomerParty.from_dict(accounting_customer_party_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


