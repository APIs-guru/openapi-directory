# MpnsCredentialProperties

Description of a NotificationHub MpnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_key** | **str** | Gets or sets the certificate key for this credential. | [optional] 
**mpns_certificate** | **str** | Gets or sets the MPNS certificate. | [optional] 
**thumbprint** | **str** | Gets or sets the Mpns certificate Thumbprint | [optional] 

## Example

```python
from openapi_client.models.mpns_credential_properties import MpnsCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of MpnsCredentialProperties from a JSON string
mpns_credential_properties_instance = MpnsCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(MpnsCredentialProperties.to_json())

# convert the object into a dict
mpns_credential_properties_dict = mpns_credential_properties_instance.to_dict()
# create an instance of MpnsCredentialProperties from a dict
mpns_credential_properties_from_dict = MpnsCredentialProperties.from_dict(mpns_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


