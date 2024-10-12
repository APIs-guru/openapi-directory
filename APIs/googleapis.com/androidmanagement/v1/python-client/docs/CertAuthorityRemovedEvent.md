# CertAuthorityRemovedEvent

A root certificate was removed from the system's trusted credential storage. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate** | **str** | Subject of the certificate. | [optional] 
**success** | **bool** | Whether the removal succeeded. | [optional] 
**user_id** | **int** | The user in which the certificate removal event occurred. Only available for devices running Android 11 and above. | [optional] 

## Example

```python
from openapi_client.models.cert_authority_removed_event import CertAuthorityRemovedEvent

# TODO update the JSON string below
json = "{}"
# create an instance of CertAuthorityRemovedEvent from a JSON string
cert_authority_removed_event_instance = CertAuthorityRemovedEvent.from_json(json)
# print the JSON string representation of the object
print(CertAuthorityRemovedEvent.to_json())

# convert the object into a dict
cert_authority_removed_event_dict = cert_authority_removed_event_instance.to_dict()
# create an instance of CertAuthorityRemovedEvent from a dict
cert_authority_removed_event_from_dict = CertAuthorityRemovedEvent.from_dict(cert_authority_removed_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


