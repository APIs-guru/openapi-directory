# JiraConnectionSecretRequest

Jira connection secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | jira secret details | 
**credential_type** | **str** | credential type of the shared connection. Values can be credentials|certificate | [optional] [default to 'credentials']
**display_name** | **str** | display name of shared connection | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.jira_connection_secret_request import JiraConnectionSecretRequest

# TODO update the JSON string below
json = "{}"
# create an instance of JiraConnectionSecretRequest from a JSON string
jira_connection_secret_request_instance = JiraConnectionSecretRequest.from_json(json)
# print the JSON string representation of the object
print(JiraConnectionSecretRequest.to_json())

# convert the object into a dict
jira_connection_secret_request_dict = jira_connection_secret_request_instance.to_dict()
# create an instance of JiraConnectionSecretRequest from a dict
jira_connection_secret_request_from_dict = JiraConnectionSecretRequest.from_dict(jira_connection_secret_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


