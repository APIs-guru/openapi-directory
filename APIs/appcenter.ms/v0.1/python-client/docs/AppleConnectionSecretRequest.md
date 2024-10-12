# AppleConnectionSecretRequest

Apple connection secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_type** | **str** | credential type of the shared connection. Values can be credentials|certificate | [optional] [default to 'credentials']
**data** | [**AppleConnectionSecretRequestAllOfData**](AppleConnectionSecretRequestAllOfData.md) |  | [optional] 
**display_name** | **str** | display name of shared connection | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.apple_connection_secret_request import AppleConnectionSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppleConnectionSecretRequest from a JSON string
apple_connection_secret_request_instance = AppleConnectionSecretRequest.from_json(json)
# print the JSON string representation of the object
print(AppleConnectionSecretRequest.to_json())

# convert the object into a dict
apple_connection_secret_request_dict = apple_connection_secret_request_instance.to_dict()
# create an instance of AppleConnectionSecretRequest from a dict
apple_connection_secret_request_from_dict = AppleConnectionSecretRequest.from_dict(apple_connection_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


