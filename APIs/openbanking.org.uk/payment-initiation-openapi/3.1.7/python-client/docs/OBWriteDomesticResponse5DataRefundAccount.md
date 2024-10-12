# OBWriteDomesticResponse5DataRefundAccount

Provides the details to identify an account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identification** | **str** | Identification assigned by an institution to identify an account. This identification is known by the account owner. | 
**name** | **str** | Name of the account, as assigned by the account servicing institution. Usage: The account name is the name or names of the account owner(s) represented at an account level. The account name is not the product name or the nickname of the account. OB: ASPSPs may carry out name validation for Confirmation of Payee, but it is not mandatory. | 
**scheme_name** | **str** | Name of the identification scheme, in a coded form as published in an external list. | 
**secondary_identification** | **str** | This is secondary identification of the account, as assigned by the account servicing institution.  This can be used by building societies to additionally identify accounts with a roll number (in addition to a sort code and account number combination). | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic_response5_data_refund_account import OBWriteDomesticResponse5DataRefundAccount

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticResponse5DataRefundAccount from a JSON string
ob_write_domestic_response5_data_refund_account_instance = OBWriteDomesticResponse5DataRefundAccount.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticResponse5DataRefundAccount.to_json())

# convert the object into a dict
ob_write_domestic_response5_data_refund_account_dict = ob_write_domestic_response5_data_refund_account_instance.to_dict()
# create an instance of OBWriteDomesticResponse5DataRefundAccount from a dict
ob_write_domestic_response5_data_refund_account_from_dict = OBWriteDomesticResponse5DataRefundAccount.from_dict(ob_write_domestic_response5_data_refund_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


