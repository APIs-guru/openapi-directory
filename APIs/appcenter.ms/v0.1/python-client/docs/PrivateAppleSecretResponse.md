# PrivateAppleSecretResponse

private Apple connection secrets response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | display name of shared connection | [optional] 
**id** | **str** | id of the shared connection | 
**is2_fa** | **bool** | if the account is a 2FA account or not | [optional] 
**is_valid** | **bool** | whether the credentials are valid or not | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.private_apple_secret_response import PrivateAppleSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateAppleSecretResponse from a JSON string
private_apple_secret_response_instance = PrivateAppleSecretResponse.from_json(json)
# print the JSON string representation of the object
print(PrivateAppleSecretResponse.to_json())

# convert the object into a dict
private_apple_secret_response_dict = private_apple_secret_response_instance.to_dict()
# create an instance of PrivateAppleSecretResponse from a dict
private_apple_secret_response_from_dict = PrivateAppleSecretResponse.from_dict(private_apple_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


