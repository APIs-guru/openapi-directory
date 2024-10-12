# Configuration

Details about the configuration of Jira.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachments_enabled** | **bool** | Whether the ability to add attachments to issues is enabled. | [optional] [readonly] 
**issue_linking_enabled** | **bool** | Whether the ability to link issues is enabled. | [optional] [readonly] 
**sub_tasks_enabled** | **bool** | Whether the ability to create subtasks for issues is enabled. | [optional] [readonly] 
**time_tracking_configuration** | [**TimeTrackingConfiguration**](TimeTrackingConfiguration.md) | The configuration of time tracking. | [optional] [readonly] 
**time_tracking_enabled** | **bool** | Whether the ability to track time is enabled. This property is deprecated. | [optional] [readonly] 
**unassigned_issues_allowed** | **bool** | Whether the ability to create unassigned issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. | [optional] [readonly] 
**voting_enabled** | **bool** | Whether the ability for users to vote on issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. | [optional] [readonly] 
**watching_enabled** | **bool** | Whether the ability for users to watch issues is enabled. See [Configuring Jira application options](https://confluence.atlassian.com/x/uYXKM) for details. | [optional] [readonly] 

## Example

```python
from openapi_client.models.configuration import Configuration

# TODO update the JSON string below
json = "{}"
# create an instance of Configuration from a JSON string
configuration_instance = Configuration.from_json(json)
# print the JSON string representation of the object
print(Configuration.to_json())

# convert the object into a dict
configuration_dict = configuration_instance.to_dict()
# create an instance of Configuration from a dict
configuration_from_dict = Configuration.from_dict(configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


