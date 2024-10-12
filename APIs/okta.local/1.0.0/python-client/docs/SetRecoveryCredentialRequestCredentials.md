# SetRecoveryCredentialRequestCredentials


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recovery_question** | [**SetRecoveryCredentialRequestCredentialsRecoveryQuestion**](SetRecoveryCredentialRequestCredentialsRecoveryQuestion.md) |  | [optional] 

## Example

```python
from openapi_client.models.set_recovery_credential_request_credentials import SetRecoveryCredentialRequestCredentials

# TODO update the JSON string below
json = "{}"
# create an instance of SetRecoveryCredentialRequestCredentials from a JSON string
set_recovery_credential_request_credentials_instance = SetRecoveryCredentialRequestCredentials.from_json(json)
# print the JSON string representation of the object
print(SetRecoveryCredentialRequestCredentials.to_json())

# convert the object into a dict
set_recovery_credential_request_credentials_dict = set_recovery_credential_request_credentials_instance.to_dict()
# create an instance of SetRecoveryCredentialRequestCredentials from a dict
set_recovery_credential_request_credentials_from_dict = SetRecoveryCredentialRequestCredentials.from_dict(set_recovery_credential_request_credentials_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


