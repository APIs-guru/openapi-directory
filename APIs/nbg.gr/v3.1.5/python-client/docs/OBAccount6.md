# OBAccount6

Unambiguous identification of the account to which credit and debit entries are made.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | [**List[OBCashAccount5]**](OBCashAccount5.md) | Provides the details to identify an account. | [optional] 
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**account_sub_type** | [**OBExternalAccountSubType1Code**](OBExternalAccountSubType1Code.md) |  | 
**account_type** | [**OBExternalAccountType1Code**](OBExternalAccountType1Code.md) |  | 
**currency** | **str** | Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account. | 
**description** | **str** | Specifies the description of the account type. | [optional] 
**nickname** | **str** | The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account. | [optional] 
**opening_date** | **datetime** | Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**servicer** | [**OBBranchAndFinancialInstitutionIdentification5**](OBBranchAndFinancialInstitutionIdentification5.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_account6 import OBAccount6

# TODO update the JSON string below
json = "{}"
# create an instance of OBAccount6 from a JSON string
ob_account6_instance = OBAccount6.from_json(json)
# print the JSON string representation of the object
print(OBAccount6.to_json())

# convert the object into a dict
ob_account6_dict = ob_account6_instance.to_dict()
# create an instance of OBAccount6 from a dict
ob_account6_from_dict = OBAccount6.from_dict(ob_account6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


