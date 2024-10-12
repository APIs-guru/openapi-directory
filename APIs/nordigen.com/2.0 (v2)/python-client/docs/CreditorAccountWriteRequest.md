# CreditorAccountWriteRequest

Creditor account write serializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Creditor account type identifier | 
**address_country** | [**AddressCountryEnum**](AddressCountryEnum.md) |  | [optional] 
**address_street** | **str** | Creditor account address street | [optional] 
**agent** | **str** | Creditor account BICFI Identifier | [optional] 
**agent_name** | **str** | Creditor account agent name | [optional] 
**currency** | **str** | Creditor account currency | 
**institution_id** | **str** | an Institution ID for this CreditorAccount | [optional] 
**name** | **str** | Creditor account name | 
**post_code** | **str** | Creditor account address post code | [optional] 
**type** | [**TypeEnum**](TypeEnum.md) | Creditor account type  * &#x60;IBAN&#x60; - IBAN * &#x60;SCAN&#x60; - SortCodeAccountNumber | [optional] 

## Example

```python
from openapi_client.models.creditor_account_write_request import CreditorAccountWriteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreditorAccountWriteRequest from a JSON string
creditor_account_write_request_instance = CreditorAccountWriteRequest.from_json(json)
# print the JSON string representation of the object
print(CreditorAccountWriteRequest.to_json())

# convert the object into a dict
creditor_account_write_request_dict = creditor_account_write_request_instance.to_dict()
# create an instance of CreditorAccountWriteRequest from a dict
creditor_account_write_request_from_dict = CreditorAccountWriteRequest.from_dict(creditor_account_write_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


