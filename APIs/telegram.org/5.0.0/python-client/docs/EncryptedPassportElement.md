# EncryptedPassportElement

Contains information about documents or other Telegram Passport elements shared with the bot by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **str** | *Optional*. Base64-encoded encrypted Telegram Passport element data provided by the user, available for “personal\\_details”, “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport” and “address” types. Can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials). | [optional] 
**email** | **str** | *Optional*. User&#39;s verified email address, available only for “email” type | [optional] 
**files** | [**List[PassportFile]**](PassportFile.md) | *Optional*. Array of encrypted files with documents provided by the user, available for “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration” and “temporary\\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials). | [optional] 
**front_side** | [**PassportFile**](PassportFile.md) |  | [optional] 
**hash** | **str** | Base64-encoded element hash for using in [PassportElementErrorUnspecified](https://core.telegram.org/bots/api/#passportelementerrorunspecified) | 
**phone_number** | **str** | *Optional*. User&#39;s verified phone number, available only for “phone\\_number” type | [optional] 
**reverse_side** | [**PassportFile**](PassportFile.md) |  | [optional] 
**selfie** | [**PassportFile**](PassportFile.md) |  | [optional] 
**translation** | [**List[PassportFile]**](PassportFile.md) | *Optional*. Array of encrypted files with translated versions of documents provided by the user. Available if requested for “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration” and “temporary\\_registration” types. Files can be decrypted and verified using the accompanying [EncryptedCredentials](https://core.telegram.org/bots/api/#encryptedcredentials). | [optional] 
**type** | **str** | Element type. One of “personal\\_details”, “passport”, “driver\\_license”, “identity\\_card”, “internal\\_passport”, “address”, “utility\\_bill”, “bank\\_statement”, “rental\\_agreement”, “passport\\_registration”, “temporary\\_registration”, “phone\\_number”, “email”. | 

## Example

```python
from openapi_client.models.encrypted_passport_element import EncryptedPassportElement

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptedPassportElement from a JSON string
encrypted_passport_element_instance = EncryptedPassportElement.from_json(json)
# print the JSON string representation of the object
print(EncryptedPassportElement.to_json())

# convert the object into a dict
encrypted_passport_element_dict = encrypted_passport_element_instance.to_dict()
# create an instance of EncryptedPassportElement from a dict
encrypted_passport_element_from_dict = EncryptedPassportElement.from_dict(encrypted_passport_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


