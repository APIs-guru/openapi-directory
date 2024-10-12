# PnsCredentialsProperties

Description of a NotificationHub PNS Credentials.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adm_credential** | [**AdmCredential**](AdmCredential.md) |  | [optional] 
**apns_credential** | [**ApnsCredential**](ApnsCredential.md) |  | [optional] 
**baidu_credential** | [**BaiduCredential**](BaiduCredential.md) |  | [optional] 
**gcm_credential** | [**GcmCredential**](GcmCredential.md) |  | [optional] 
**mpns_credential** | [**MpnsCredential**](MpnsCredential.md) |  | [optional] 
**wns_credential** | [**WnsCredential**](WnsCredential.md) |  | [optional] 

## Example

```python
from openapi_client.models.pns_credentials_properties import PnsCredentialsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PnsCredentialsProperties from a JSON string
pns_credentials_properties_instance = PnsCredentialsProperties.from_json(json)
# print the JSON string representation of the object
print(PnsCredentialsProperties.to_json())

# convert the object into a dict
pns_credentials_properties_dict = pns_credentials_properties_instance.to_dict()
# create an instance of PnsCredentialsProperties from a dict
pns_credentials_properties_from_dict = PnsCredentialsProperties.from_dict(pns_credentials_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


