# GoogleAnalyticsAdminV1betaChangeHistoryEvent

A set of changes within a Google Analytics account or its child properties that resulted from the same cause. Common causes would be updates made in the Google Analytics UI, changes from customer support, or automatic Google Analytics system changes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actor_type** | **str** | The type of actor that made this change. | [optional] 
**change_time** | **str** | Time when change was made. | [optional] 
**changes** | [**List[GoogleAnalyticsAdminV1betaChangeHistoryChange]**](GoogleAnalyticsAdminV1betaChangeHistoryChange.md) | A list of changes made in this change history event that fit the filters specified in SearchChangeHistoryEventsRequest. | [optional] 
**changes_filtered** | **bool** | If true, then the list of changes returned was filtered, and does not represent all changes that occurred in this event. | [optional] 
**id** | **str** | ID of this change history event. This ID is unique across Google Analytics. | [optional] 
**user_actor_email** | **str** | Email address of the Google account that made the change. This will be a valid email address if the actor field is set to USER, and empty otherwise. Google accounts that have been deleted will cause an error. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_change_history_event import GoogleAnalyticsAdminV1betaChangeHistoryEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaChangeHistoryEvent from a JSON string
google_analytics_admin_v1beta_change_history_event_instance = GoogleAnalyticsAdminV1betaChangeHistoryEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaChangeHistoryEvent.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_change_history_event_dict = google_analytics_admin_v1beta_change_history_event_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaChangeHistoryEvent from a dict
google_analytics_admin_v1beta_change_history_event_from_dict = GoogleAnalyticsAdminV1betaChangeHistoryEvent.from_dict(google_analytics_admin_v1beta_change_history_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


