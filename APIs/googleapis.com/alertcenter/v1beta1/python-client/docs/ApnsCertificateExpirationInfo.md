# ApnsCertificateExpirationInfo

The explanation message associated with \"APNS certificate is expiring soon\" and \"APNS certificate has expired\" alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apple_id** | **str** | The Apple ID used to create the certificate. It may be blank if admins didn&#39;t enter it. | [optional] 
**expiration_time** | **str** | The expiration date of the APNS certificate. | [optional] 
**uid** | **str** | The UID of the certificate. | [optional] 

## Example

```python
from openapi_client.models.apns_certificate_expiration_info import ApnsCertificateExpirationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApnsCertificateExpirationInfo from a JSON string
apns_certificate_expiration_info_instance = ApnsCertificateExpirationInfo.from_json(json)
# print the JSON string representation of the object
print(ApnsCertificateExpirationInfo.to_json())

# convert the object into a dict
apns_certificate_expiration_info_dict = apns_certificate_expiration_info_instance.to_dict()
# create an instance of ApnsCertificateExpirationInfo from a dict
apns_certificate_expiration_info_from_dict = ApnsCertificateExpirationInfo.from_dict(apns_certificate_expiration_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


