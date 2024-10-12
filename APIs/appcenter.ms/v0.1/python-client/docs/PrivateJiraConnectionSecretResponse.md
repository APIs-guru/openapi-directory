# PrivateJiraConnectionSecretResponse

private Jira connection secrets response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | jira secret details | 
**display_name** | **str** | display name of shared connection | [optional] 
**id** | **str** | id of the shared connection | 
**is2_fa** | **bool** | if the account is a 2FA account or not | [optional] 
**is_valid** | **bool** | whether the credentials are valid or not | [optional] 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira|applecertificate | 

## Example

```python
from openapi_client.models.private_jira_connection_secret_response import PrivateJiraConnectionSecretResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PrivateJiraConnectionSecretResponse from a JSON string
private_jira_connection_secret_response_instance = PrivateJiraConnectionSecretResponse.from_json(json)
# print the JSON string representation of the object
print(PrivateJiraConnectionSecretResponse.to_json())

# convert the object into a dict
private_jira_connection_secret_response_dict = private_jira_connection_secret_response_instance.to_dict()
# create an instance of PrivateJiraConnectionSecretResponse from a dict
private_jira_connection_secret_response_from_dict = PrivateJiraConnectionSecretResponse.from_dict(private_jira_connection_secret_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


