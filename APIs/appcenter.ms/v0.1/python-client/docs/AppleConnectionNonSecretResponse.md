# AppleConnectionNonSecretResponse

Apple connection secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.apple_connection_non_secret_response import AppleConnectionNonSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppleConnectionNonSecretResponse from a JSON string
apple_connection_non_secret_response_instance = AppleConnectionNonSecretResponse.from_json(json)
# print the JSON string representation of the object
print(AppleConnectionNonSecretResponse.to_json())

# convert the object into a dict
apple_connection_non_secret_response_dict = apple_connection_non_secret_response_instance.to_dict()
# create an instance of AppleConnectionNonSecretResponse from a dict
apple_connection_non_secret_response_from_dict = AppleConnectionNonSecretResponse.from_dict(apple_connection_non_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


