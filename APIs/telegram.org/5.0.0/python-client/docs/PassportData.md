# PassportData

Contains information about Telegram Passport data shared with the bot by the user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**EncryptedCredentials**](EncryptedCredentials.md) |  | 
**data** | [**List[EncryptedPassportElement]**](EncryptedPassportElement.md) | Array with information about documents and other Telegram Passport elements that was shared with the bot | 

## Example

```python
from openapi_client.models.passport_data import PassportData

# TODO update the JSON string below
json = "{}"
# create an instance of PassportData from a JSON string
passport_data_instance = PassportData.from_json(json)
# print the JSON string representation of the object
print(PassportData.to_json())

# convert the object into a dict
passport_data_dict = passport_data_instance.to_dict()
# create an instance of PassportData from a dict
passport_data_from_dict = PassportData.from_dict(passport_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


