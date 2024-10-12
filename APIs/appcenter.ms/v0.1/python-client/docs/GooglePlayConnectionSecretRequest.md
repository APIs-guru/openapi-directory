# GooglePlayConnectionSecretRequest

Google Play connection secrets this should be the JSON file data which is provided by google play

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | google secret details | 
**credential_type** | **str** | credential type of the shared connection. Values can be credentials|certificate | [optional] [default to 'credentials']
**display_name** | **str** | display name of shared connection | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.google_play_connection_secret_request import GooglePlayConnectionSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayConnectionSecretRequest from a JSON string
google_play_connection_secret_request_instance = GooglePlayConnectionSecretRequest.from_json(json)
# print the JSON string representation of the object
print(GooglePlayConnectionSecretRequest.to_json())

# convert the object into a dict
google_play_connection_secret_request_dict = google_play_connection_secret_request_instance.to_dict()
# create an instance of GooglePlayConnectionSecretRequest from a dict
google_play_connection_secret_request_from_dict = GooglePlayConnectionSecretRequest.from_dict(google_play_connection_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


