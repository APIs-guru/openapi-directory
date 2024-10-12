# GcmCredentialProperties

Description of a NotificationHub GcmCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcm_endpoint** | **str** | The GCM endpoint. | [optional] 
**google_api_key** | **str** | The Google API key. | [optional] 

## Example

```python
from openapi_client.models.gcm_credential_properties import GcmCredentialProperties

# TODO update the JSON string below
json = "{}"
# create an instance of GcmCredentialProperties from a JSON string
gcm_credential_properties_instance = GcmCredentialProperties.from_json(json)
# print the JSON string representation of the object
print(GcmCredentialProperties.to_json())

# convert the object into a dict
gcm_credential_properties_dict = gcm_credential_properties_instance.to_dict()
# create an instance of GcmCredentialProperties from a dict
gcm_credential_properties_from_dict = GcmCredentialProperties.from_dict(gcm_credential_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


