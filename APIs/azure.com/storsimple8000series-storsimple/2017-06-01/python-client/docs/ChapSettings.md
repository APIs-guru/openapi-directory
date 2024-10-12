# ChapSettings

The Challenge-Handshake Authentication Protocol (CHAP) settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator_secret** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**initiator_user** | **str** | The CHAP initiator user. | [optional] 
**target_secret** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**target_user** | **str** | The CHAP target user. | [optional] 

## Example

```python
from openapi_client.models.chap_settings import ChapSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ChapSettings from a JSON string
chap_settings_instance = ChapSettings.from_json(json)
# print the JSON string representation of the object
print(ChapSettings.to_json())

# convert the object into a dict
chap_settings_dict = chap_settings_instance.to_dict()
# create an instance of ChapSettings from a dict
chap_settings_from_dict = ChapSettings.from_dict(chap_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


