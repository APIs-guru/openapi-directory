# JiraCredentialNonSecretDetailsResponse

Jira credentials non-secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** | Jira credentials non-secret details | 
**credential_type** | **str** | the type of the credential | [optional] 
**display_name** | **str** | display name of shared connection | 
**service_type** | **str** | service type of shared connection can be apple|gitlab|googleplay|jira | 

## Example

```python
from openapi_client.models.jira_credential_non_secret_details_response import JiraCredentialNonSecretDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JiraCredentialNonSecretDetailsResponse from a JSON string
jira_credential_non_secret_details_response_instance = JiraCredentialNonSecretDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(JiraCredentialNonSecretDetailsResponse.to_json())

# convert the object into a dict
jira_credential_non_secret_details_response_dict = jira_credential_non_secret_details_response_instance.to_dict()
# create an instance of JiraCredentialNonSecretDetailsResponse from a dict
jira_credential_non_secret_details_response_from_dict = JiraCredentialNonSecretDetailsResponse.from_dict(jira_credential_non_secret_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


