# OtherBankInterestType

Other interest rate types which are not available in the standard code list

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_bank_interest_type import OtherBankInterestType

# TODO update the JSON string below
json = "{}"
# create an instance of OtherBankInterestType from a JSON string
other_bank_interest_type_instance = OtherBankInterestType.from_json(json)
# print the JSON string representation of the object
print(OtherBankInterestType.to_json())

# convert the object into a dict
other_bank_interest_type_dict = other_bank_interest_type_instance.to_dict()
# create an instance of OtherBankInterestType from a dict
other_bank_interest_type_from_dict = OtherBankInterestType.from_dict(other_bank_interest_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


