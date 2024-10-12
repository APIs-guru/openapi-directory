# AlertingBugtracker

Alerting bugtracker resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_types** | **List[str]** | Event types enabled for bugtracker | [optional] 
**settings** | [**BugtrackerGetSettings200ResponseSettings**](BugtrackerGetSettings200ResponseSettings.md) |  | [optional] 
**state** | **str** | bugtracker state | [optional] 
**token_id** | **str** | ID of OAuth token | [optional] 
**type** | **str** | type of bugtracker | [optional] 

## Example

```python
from openapi_client.models.alerting_bugtracker import AlertingBugtracker

# TODO update the JSON string below
json = "{}"
# create an instance of AlertingBugtracker from a JSON string
alerting_bugtracker_instance = AlertingBugtracker.from_json(json)
# print the JSON string representation of the object
print(AlertingBugtracker.to_json())

# convert the object into a dict
alerting_bugtracker_dict = alerting_bugtracker_instance.to_dict()
# create an instance of AlertingBugtracker from a dict
alerting_bugtracker_from_dict = AlertingBugtracker.from_dict(alerting_bugtracker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


