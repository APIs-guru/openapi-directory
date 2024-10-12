# ATMInner

ATM information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**atm_services** | **List[str]** | Describes the type of transaction available for a customer on an ATM. | [optional] 
**access24_hours_indicator** | **bool** | Indicates that the ATM is available for use by customers 24 hours per day | [optional] 
**accessibility** | **List[str]** | Indicates Types of Accessibility | [optional] 
**branch** | **object** | Information that locates and identifies a specific branch of a financial institution. | [optional] 
**identification** | **str** | ATM terminal device identification for the acquirer and the issuer. | 
**location** | **object** | Location of the ATM. | 
**minimum_possible_amount** | **str** | Minimum amount allowed for a transaction in the service. | [optional] 
**note** | **List[str]** | Summary description of the ATM. | [optional] 
**other_atm_services** | [**List[OtherATMServicesInner]**](OtherATMServicesInner.md) | Enter a new code , name and description for any other ATM Service | [optional] 
**other_accessibility** | [**List[OtherAccessibilityInner]**](OtherAccessibilityInner.md) | Enter a new code , name and description for any other ATM accessibility options | [optional] 
**supported_currencies** | **List[str]** | All ISO 4217 defined currency  supported by the ATM. | 
**supported_languages** | **List[str]** | Identification of the language name according to the ISO 639-1 codes. The type is validated by the list of values coded with two alphabetic characters, defined in the standard. | [optional] 

## Example

```python
from openapi_client.models.atm_inner import ATMInner

# TODO update the JSON string below
json = "{}"
# create an instance of ATMInner from a JSON string
atm_inner_instance = ATMInner.from_json(json)
# print the JSON string representation of the object
print(ATMInner.to_json())

# convert the object into a dict
atm_inner_dict = atm_inner_instance.to_dict()
# create an instance of ATMInner from a dict
atm_inner_from_dict = ATMInner.from_dict(atm_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


