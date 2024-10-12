# BankAttributes

Array of bank attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** |  | [optional] 
**bank_code** | **str** |  | [optional] 
**bic** | **str** |  | [optional] 
**code** | **str** | Bank&#x60;s code | [optional] 
**iban** | **str** |  | [optional] 
**name** | **str** | Bank&#x60;s name | [optional] 
**sort_code** | **str** |  | [optional] 
**status** | **str** | Status [active, liquidated, problem, deleted] | [optional] 
**vatin** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.bank_attributes import BankAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BankAttributes from a JSON string
bank_attributes_instance = BankAttributes.from_json(json)
# print the JSON string representation of the object
print(BankAttributes.to_json())

# convert the object into a dict
bank_attributes_dict = bank_attributes_instance.to_dict()
# create an instance of BankAttributes from a dict
bank_attributes_from_dict = BankAttributes.from_dict(bank_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


