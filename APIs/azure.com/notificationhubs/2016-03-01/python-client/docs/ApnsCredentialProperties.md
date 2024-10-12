# ApnsCredentialProperties

Description of a NotificationHub ApnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apns_certificate** | **str** | The APNS certificate. | [optional] 
**certificate_key** | **str** | The certificate key. | [optional] 
**endpoint** | **str** | The endpoint of this credential. | [optional] 
**thumbprint** | **str** | The APNS certificate Thumbprint | [optional] 

## Example

```python
from openapi_client.models.apns_credential_properties import ApnsCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApnsCredentialProperties from a JSON string
apns_credential_properties_instance = ApnsCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(ApnsCredentialProperties.to_json())

# convert the object into a dict
apns_credential_properties_dict = apns_credential_properties_instance.to_dict()
# create an instance of ApnsCredentialProperties from a dict
apns_credential_properties_from_dict = ApnsCredentialProperties.from_dict(apns_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


