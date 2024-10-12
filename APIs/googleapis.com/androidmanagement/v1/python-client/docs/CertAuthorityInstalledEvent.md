# CertAuthorityInstalledEvent

A new root certificate was installed into the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | Subject of the certificate. | [optional] 
**success** | **bool** | Whether the installation event succeeded. | [optional] 
**user_id** | **int** | The user in which the certificate install event happened. Only available for devices running Android 11 and above. | [optional] 

## Example

```python
from openapi_client.models.cert_authority_installed_event import CertAuthorityInstalledEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CertAuthorityInstalledEvent from a JSON string
cert_authority_installed_event_instance = CertAuthorityInstalledEvent.from_json(json)
# print the JSON string representation of the object
print(CertAuthorityInstalledEvent.to_json())

# convert the object into a dict
cert_authority_installed_event_dict = cert_authority_installed_event_instance.to_dict()
# create an instance of CertAuthorityInstalledEvent from a dict
cert_authority_installed_event_from_dict = CertAuthorityInstalledEvent.from_dict(cert_authority_installed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


