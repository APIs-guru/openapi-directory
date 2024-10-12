# GcmCredential

Description of a NotificationHub GcmCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GcmCredentialProperties**](GcmCredentialProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.gcm_credential import GcmCredential

# TODO update the JSON string below
json = "{}"
# create an instance of GcmCredential from a JSON string
gcm_credential_instance = GcmCredential.from_json(json)
# print the JSON string representation of the object
print(GcmCredential.to_json())

# convert the object into a dict
gcm_credential_dict = gcm_credential_instance.to_dict()
# create an instance of GcmCredential from a dict
gcm_credential_from_dict = GcmCredential.from_dict(gcm_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


