# GooglePlayConnectionNonSecretResponse

Google Play non-secret data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.google_play_connection_non_secret_response import GooglePlayConnectionNonSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayConnectionNonSecretResponse from a JSON string
google_play_connection_non_secret_response_instance = GooglePlayConnectionNonSecretResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePlayConnectionNonSecretResponse.to_json())

# convert the object into a dict
google_play_connection_non_secret_response_dict = google_play_connection_non_secret_response_instance.to_dict()
# create an instance of GooglePlayConnectionNonSecretResponse from a dict
google_play_connection_non_secret_response_from_dict = GooglePlayConnectionNonSecretResponse.from_dict(google_play_connection_non_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


