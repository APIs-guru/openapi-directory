# Worklog

Details of a worklog.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | [**UserDetails**](UserDetails.md) | Details of the user who created the worklog. | [optional] [readonly] 
**comment** | **object** | A comment about the worklog in [Atlassian Document Format](https://developer.atlassian.com/cloud/jira/platform/apis/document/structure/). Optional when creating or updating a worklog. | [optional] 
**created** | **datetime** | The datetime on which the worklog was created. | [optional] [readonly] 
**id** | **str** | The ID of the worklog record. | [optional] [readonly] 
**issue_id** | **str** | The ID of the issue this worklog is for. | [optional] [readonly] 
**properties** | [**List[EntityProperty]**](EntityProperty.md) | Details of properties for the worklog. Optional when creating or updating a worklog. | [optional] 
**var_self** | **str** | The URL of the worklog item. | [optional] [readonly] 
**started** | **datetime** | The datetime on which the worklog effort was started. Required when creating a worklog. Optional when updating a worklog. | [optional] 
**time_spent** | **str** | The time spent working on the issue as days (\\#d), hours (\\#h), or minutes (\\#m or \\#). Required when creating a worklog if &#x60;timeSpentSeconds&#x60; isn&#39;t provided. Optional when updating a worklog. Cannot be provided if &#x60;timeSpentSecond&#x60; is provided. | [optional] 
**time_spent_seconds** | **int** | The time in seconds spent working on the issue. Required when creating a worklog if &#x60;timeSpent&#x60; isn&#39;t provided. Optional when updating a worklog. Cannot be provided if &#x60;timeSpent&#x60; is provided. | [optional] 
**update_author** | [**UserDetails**](UserDetails.md) | Details of the user who last updated the worklog. | [optional] [readonly] 
**updated** | **datetime** | The datetime on which the worklog was last updated. | [optional] [readonly] 
**visibility** | [**Visibility**](Visibility.md) | Details about any restrictions in the visibility of the worklog. Optional when creating or updating a worklog. | [optional] 

## Example

```python
from openapi_client.models.worklog import Worklog

# TODO update the JSON string below
json = "{}"
# create an instance of Worklog from a JSON string
worklog_instance = Worklog.from_json(json)
# print the JSON string representation of the object
print(Worklog.to_json())

# convert the object into a dict
worklog_dict = worklog_instance.to_dict()
# create an instance of Worklog from a dict
worklog_from_dict = Worklog.from_dict(worklog_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


