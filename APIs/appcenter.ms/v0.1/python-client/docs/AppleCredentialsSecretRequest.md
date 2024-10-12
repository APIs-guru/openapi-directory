# AppleCredentialsSecretRequest

Apple connection secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | apple secret details | 
**credential_type** | **str** | credential type of the shared connection. Values can be credentials|certificate | [optional] [default to 'credentials']
**display_name** | **str** | display name of shared connection | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.apple_credentials_secret_request import AppleCredentialsSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleCredentialsSecretRequest from a JSON string
apple_credentials_secret_request_instance = AppleCredentialsSecretRequest.from_json(json)
# print the JSON string representation of the object
print(AppleCredentialsSecretRequest.to_json())

# convert the object into a dict
apple_credentials_secret_request_dict = apple_credentials_secret_request_instance.to_dict()
# create an instance of AppleCredentialsSecretRequest from a dict
apple_credentials_secret_request_from_dict = AppleCredentialsSecretRequest.from_dict(apple_credentials_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


