# DebtorAccountWriteRequest

Debtor account write serializer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Debtor account type identifier | [optional] 
**address_country** | **str** | Debtor account address country | [optional] 
**address_street** | **str** | Debtor account address street | [optional] 
**currency** | **str** | Debtor account currency | [optional] 
**name** | **str** | Debtor account name | 
**post_code** | **str** | Debtor account post code | [optional] 
**type** | [**TypeEnum**](TypeEnum.md) | Debtor account type  * &#x60;IBAN&#x60; - IBAN * &#x60;SCAN&#x60; - SortCodeAccountNumber | [optional] 
**type_number** | **str** | Debtor account type identifier | [optional] 

## Example

```python
from openapi_client.models.debtor_account_write_request import DebtorAccountWriteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DebtorAccountWriteRequest from a JSON string
debtor_account_write_request_instance = DebtorAccountWriteRequest.from_json(json)
# print the JSON string representation of the object
print(DebtorAccountWriteRequest.to_json())

# convert the object into a dict
debtor_account_write_request_dict = debtor_account_write_request_instance.to_dict()
# create an instance of DebtorAccountWriteRequest from a dict
debtor_account_write_request_from_dict = DebtorAccountWriteRequest.from_dict(debtor_account_write_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


