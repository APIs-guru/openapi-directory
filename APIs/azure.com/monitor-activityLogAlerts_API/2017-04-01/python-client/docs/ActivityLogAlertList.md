# ActivityLogAlertList

A list of activity log alerts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Provides the link to retrieve the next set of elements. | [optional] 
**value** | [**List[ActivityLogAlertResource]**](ActivityLogAlertResource.md) | The list of activity log alerts. | [optional] 

## Example

```python
from openapi_client.models.activity_log_alert_list import ActivityLogAlertList

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityLogAlertList from a JSON string
activity_log_alert_list_instance = ActivityLogAlertList.from_json(json)
# print the JSON string representation of the object
print(ActivityLogAlertList.to_json())

# convert the object into a dict
activity_log_alert_list_dict = activity_log_alert_list_instance.to_dict()
# create an instance of ActivityLogAlertList from a dict
activity_log_alert_list_from_dict = ActivityLogAlertList.from_dict(activity_log_alert_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


