# ApnsCredentialProperties

Description of a NotificationHub ApnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apns_certificate** | **str** | The APNS certificate. | [optional] 
**app_id** | **str** | The issuer (iss) registered claim key, whose value is your 10-character Team ID, obtained from your developer account | [optional] 
**app_name** | **str** | The name of the application | [optional] 
**certificate_key** | **str** | The certificate key. | [optional] 
**endpoint** | **str** | The endpoint of this credential. | [optional] 
**key_id** | **str** | A 10-character key identifier (kid) key, obtained from your developer account | [optional] 
**thumbprint** | **str** | The APNS certificate Thumbprint | [optional] 
**token** | **str** | Provider Authentication Token, obtained through your developer account | [optional] 

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


