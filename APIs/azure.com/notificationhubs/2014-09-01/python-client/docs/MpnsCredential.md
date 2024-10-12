# MpnsCredential

Description of a NotificationHub MpnsCredential.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**MpnsCredentialProperties**](MpnsCredentialProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.mpns_credential import MpnsCredential

# TODO update the JSON string below
json = "{}"
# create an instance of MpnsCredential from a JSON string
mpns_credential_instance = MpnsCredential.from_json(json)
# print the JSON string representation of the object
print(MpnsCredential.to_json())

# convert the object into a dict
mpns_credential_dict = mpns_credential_instance.to_dict()
# create an instance of MpnsCredential from a dict
mpns_credential_from_dict = MpnsCredential.from_dict(mpns_credential_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


