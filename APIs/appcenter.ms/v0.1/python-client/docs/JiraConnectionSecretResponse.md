# JiraConnectionSecretResponse

Jira connection secrets

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | jira secret details | 
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.jira_connection_secret_response import JiraConnectionSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JiraConnectionSecretResponse from a JSON string
jira_connection_secret_response_instance = JiraConnectionSecretResponse.from_json(json)
# print the JSON string representation of the object
print(JiraConnectionSecretResponse.to_json())

# convert the object into a dict
jira_connection_secret_response_dict = jira_connection_secret_response_instance.to_dict()
# create an instance of JiraConnectionSecretResponse from a dict
jira_connection_secret_response_from_dict = JiraConnectionSecretResponse.from_dict(jira_connection_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


