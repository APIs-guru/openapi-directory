# GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse

Response message for SearchAccessibleApps.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps** | [**List[GooglePlayDeveloperReportingV1beta1App]**](GooglePlayDeveloperReportingV1beta1App.md) | The apps accessible to the user calling the endpoint. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1beta1_search_accessible_apps_response import GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse from a JSON string
google_play_developer_reporting_v1beta1_search_accessible_apps_response_instance = GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse.to_json())

# convert the object into a dict
google_play_developer_reporting_v1beta1_search_accessible_apps_response_dict = google_play_developer_reporting_v1beta1_search_accessible_apps_response_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse from a dict
google_play_developer_reporting_v1beta1_search_accessible_apps_response_from_dict = GooglePlayDeveloperReportingV1beta1SearchAccessibleAppsResponse.from_dict(google_play_developer_reporting_v1beta1_search_accessible_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


