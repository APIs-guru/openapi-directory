# JiraSecretDetailsResponse

Jira secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | baseUrl to connect to jira instance | 
**username** | **str** | username to connect to jira instance | 

## Example

```python
from openapi_client.models.jira_secret_details_response import JiraSecretDetailsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JiraSecretDetailsResponse from a JSON string
jira_secret_details_response_instance = JiraSecretDetailsResponse.from_json(json)
# print the JSON string representation of the object
print(JiraSecretDetailsResponse.to_json())

# convert the object into a dict
jira_secret_details_response_dict = jira_secret_details_response_instance.to_dict()
# create an instance of JiraSecretDetailsResponse from a dict
jira_secret_details_response_from_dict = JiraSecretDetailsResponse.from_dict(jira_secret_details_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


