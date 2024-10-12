# JiraSecretDetails

Jira secret details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_url** | **str** | baseUrl to connect to jira instance | 
**password** | **str** | password to connect to jira instance | 
**username** | **str** | username to connect to jira instance | 

## Example

```python
from openapi_client.models.jira_secret_details import JiraSecretDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JiraSecretDetails from a JSON string
jira_secret_details_instance = JiraSecretDetails.from_json(json)
# print the JSON string representation of the object
print(JiraSecretDetails.to_json())

# convert the object into a dict
jira_secret_details_dict = jira_secret_details_instance.to_dict()
# create an instance of JiraSecretDetails from a dict
jira_secret_details_from_dict = JiraSecretDetails.from_dict(jira_secret_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


