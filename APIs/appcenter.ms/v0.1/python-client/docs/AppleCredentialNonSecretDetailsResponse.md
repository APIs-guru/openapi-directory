# AppleCredentialNonSecretDetailsResponse

Apple credentials non-secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | Apple credentials non-secret data | 
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.apple_credential_non_secret_details_response import AppleCredentialNonSecretDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleCredentialNonSecretDetailsResponse from a JSON string
apple_credential_non_secret_details_response_instance = AppleCredentialNonSecretDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(AppleCredentialNonSecretDetailsResponse.to_json())

# convert the object into a dict
apple_credential_non_secret_details_response_dict = apple_credential_non_secret_details_response_instance.to_dict()
# create an instance of AppleCredentialNonSecretDetailsResponse from a dict
apple_credential_non_secret_details_response_from_dict = AppleCredentialNonSecretDetailsResponse.from_dict(apple_credential_non_secret_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


