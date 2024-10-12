# AlertingJiraBugtrackerSettings

Jira bugtracker specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**jira_project_id** | **int** |  | 
**jira_project_name** | **str** |  | 
**callback_url** | **str** |  | [optional] 
**owner_name** | **str** |  | 
**type** | **str** | type of bugtracker | 

## Example

```python
from openapi_client.models.alerting_jira_bugtracker_settings import AlertingJiraBugtrackerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingJiraBugtrackerSettings from a JSON string
alerting_jira_bugtracker_settings_instance = AlertingJiraBugtrackerSettings.from_json(json)
# print the JSON string representation of the object
print(AlertingJiraBugtrackerSettings.to_json())

# convert the object into a dict
alerting_jira_bugtracker_settings_dict = alerting_jira_bugtracker_settings_instance.to_dict()
# create an instance of AlertingJiraBugtrackerSettings from a dict
alerting_jira_bugtracker_settings_from_dict = AlertingJiraBugtrackerSettings.from_dict(alerting_jira_bugtracker_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


