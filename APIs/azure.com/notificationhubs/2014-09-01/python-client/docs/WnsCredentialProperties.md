# WnsCredentialProperties

Description of a NotificationHub WnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_sid** | **str** | Gets or sets the package ID for this credential. | [optional] 
**secret_key** | **str** | Gets or sets the secret key. | [optional] 
**windows_live_endpoint** | **str** | Gets or sets the Windows Live endpoint. | [optional] 

## Example

```python
from openapi_client.models.wns_credential_properties import WnsCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of WnsCredentialProperties from a JSON string
wns_credential_properties_instance = WnsCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(WnsCredentialProperties.to_json())

# convert the object into a dict
wns_credential_properties_dict = wns_credential_properties_instance.to_dict()
# create an instance of WnsCredentialProperties from a dict
wns_credential_properties_from_dict = WnsCredentialProperties.from_dict(wns_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


