# SetRecoveryCredentialRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credentials** | [**SetRecoveryCredentialRequestCredentials**](SetRecoveryCredentialRequestCredentials.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_recovery_credential_request import SetRecoveryCredentialRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SetRecoveryCredentialRequest from a JSON string
set_recovery_credential_request_instance = SetRecoveryCredentialRequest.from_json(json)
# print the JSON string representation of the object
print(SetRecoveryCredentialRequest.to_json())

# convert the object into a dict
set_recovery_credential_request_dict = set_recovery_credential_request_instance.to_dict()
# create an instance of SetRecoveryCredentialRequest from a dict
set_recovery_credential_request_from_dict = SetRecoveryCredentialRequest.from_dict(set_recovery_credential_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


