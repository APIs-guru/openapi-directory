# TokenCryptogram6

Token Cryptogram is a value that needs to be processed along with the token when submitting a transaction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pan_sequence_number** | **str** | PAN Sequence Number distinguishes among separate cards having the same PAN. Processors  with chip-reading capability may pass this information for Contactless Chip and Contactless Magstripe transactions.When the token_cryptogram.type contains one the following types CONTACTLESS_CHIP, CONTACTLESS_MAGSTRIPE, DSRP_CHIP, then the pan_sequence_number may be present.  Type: Numeric[0-9], Length: 3 | [optional] 
**type** | **str** | CONTACTLESS_CHIP: When shared cryptogram in token_cryptogram.value is result of a contactless tap and chip information is read by the terminal, CONTACTLESS_MAGSTRIPE: When shared cryptogram in token_cryptogram.value is result of a contactless tap and the magstripe information is read by the terminal, DSRP_UCAF: When shared cryptogram in token_cryptogram.value is result of an in-app purchase and chip information to be passed in the UCAF field, DSRP_CHIP: When shared cryptogram in token_cryptogram.value is result of an in-app purchase leveraging EMV data.Values - CONTACTLESS_CHIP, CONTACTLESS_MAGSTRIPE, DSRP_UCAF, DSRP_CHIP.   Type: Alpha Special [A-Z-], Length: 1-22 | 
**value** | **str** | CONTACTLESS_CHIP - Type: Hexadecimal [A-F0-9], Length: 2-510  CONTACTLESS_MAGSTRIPE - Type: Hexadecimal [A-F0-9], Length: 2-510  DSRP_UCAF - Type: Base64 [A-Za-z0-9+/&#x3D;?:], Length: 1-510  DSRP_CHIP - Type: Hexadecimal [A-F0-9], Length: 2-510 | 

## Example

```python
from openapi_client.models.token_cryptogram6 import TokenCryptogram6

# TODO update the JSON string below
json = "{}"
# create an instance of TokenCryptogram6 from a JSON string
token_cryptogram6_instance = TokenCryptogram6.from_json(json)
# print the JSON string representation of the object
print(TokenCryptogram6.to_json())

# convert the object into a dict
token_cryptogram6_dict = token_cryptogram6_instance.to_dict()
# create an instance of TokenCryptogram6 from a dict
token_cryptogram6_from_dict = TokenCryptogram6.from_dict(token_cryptogram6_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


