# JiraStatus

Details of a status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the status. | [optional] 
**id** | **str** | The ID of the status. | [optional] 
**name** | **str** | The name of the status. | [optional] 
**scope** | [**StatusScope**](StatusScope.md) |  | [optional] 
**status_category** | **str** | The category of the status. | [optional] 
**usages** | [**List[ProjectIssueTypes]**](ProjectIssueTypes.md) | Projects and issue types where the status is used. Only available if the &#x60;usages&#x60; expand is requested. | [optional] 

## Example

```python
from openapi_client.models.jira_status import JiraStatus

# TODO update the JSON string below
json = "{}"
# create an instance of JiraStatus from a JSON string
jira_status_instance = JiraStatus.from_json(json)
# print the JSON string representation of the object
print(JiraStatus.to_json())

# convert the object into a dict
jira_status_dict = jira_status_instance.to_dict()
# create an instance of JiraStatus from a dict
jira_status_from_dict = JiraStatus.from_dict(jira_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


