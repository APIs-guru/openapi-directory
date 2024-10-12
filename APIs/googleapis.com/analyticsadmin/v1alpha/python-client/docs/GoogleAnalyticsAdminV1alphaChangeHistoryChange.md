# GoogleAnalyticsAdminV1alphaChangeHistoryChange

A description of a change to a single Google Analytics resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action** | **str** | The type of action that changed this resource. | [optional] 
**resource** | **str** | Resource name of the resource whose changes are described by this entry. | [optional] 
**resource_after_change** | [**GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource**](GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.md) |  | [optional] 
**resource_before_change** | [**GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource**](GoogleAnalyticsAdminV1alphaChangeHistoryChangeChangeHistoryResource.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_change_history_change import GoogleAnalyticsAdminV1alphaChangeHistoryChange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaChangeHistoryChange from a JSON string
google_analytics_admin_v1alpha_change_history_change_instance = GoogleAnalyticsAdminV1alphaChangeHistoryChange.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaChangeHistoryChange.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_change_history_change_dict = google_analytics_admin_v1alpha_change_history_change_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaChangeHistoryChange from a dict
google_analytics_admin_v1alpha_change_history_change_from_dict = GoogleAnalyticsAdminV1alphaChangeHistoryChange.from_dict(google_analytics_admin_v1alpha_change_history_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


