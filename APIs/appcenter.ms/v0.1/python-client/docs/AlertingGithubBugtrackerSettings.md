# AlertingGithubBugtrackerSettings

Github bugtracker specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**github_label** | **str** |  | [optional] 
**github_repo_id** | **int** |  | 
**github_repo_name** | **str** |  | 
**callback_url** | **str** |  | [optional] 
**owner_name** | **str** |  | 
**type** | **str** | type of bugtracker | 

## Example

```python
from openapi_client.models.alerting_github_bugtracker_settings import AlertingGithubBugtrackerSettings

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingGithubBugtrackerSettings from a JSON string
alerting_github_bugtracker_settings_instance = AlertingGithubBugtrackerSettings.from_json(json)
# print the JSON string representation of the object
print(AlertingGithubBugtrackerSettings.to_json())

# convert the object into a dict
alerting_github_bugtracker_settings_dict = alerting_github_bugtracker_settings_instance.to_dict()
# create an instance of AlertingGithubBugtrackerSettings from a dict
alerting_github_bugtracker_settings_from_dict = AlertingGithubBugtrackerSettings.from_dict(alerting_github_bugtracker_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


