# GooglePlayDeveloperReportingV1alpha1App

A representation of an app in the Play Store.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Title of the app. This is the latest title as set in the Play Console and may not yet have been reviewed, so might not match the Play Store. Example: &#x60;Google Maps&#x60;. | [optional] 
**name** | **str** | Identifier. The resource name. Format: apps/{app} | [optional] 
**package_name** | **str** | Package name of the app. Example: &#x60;com.example.app123&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_play_developer_reporting_v1alpha1_app import GooglePlayDeveloperReportingV1alpha1App

# TODO update the JSON string below
json = "{}"
# create an instance of GooglePlayDeveloperReportingV1alpha1App from a JSON string
google_play_developer_reporting_v1alpha1_app_instance = GooglePlayDeveloperReportingV1alpha1App.from_json(json)
# print the JSON string representation of the object
print(GooglePlayDeveloperReportingV1alpha1App.to_json())

# convert the object into a dict
google_play_developer_reporting_v1alpha1_app_dict = google_play_developer_reporting_v1alpha1_app_instance.to_dict()
# create an instance of GooglePlayDeveloperReportingV1alpha1App from a dict
google_play_developer_reporting_v1alpha1_app_from_dict = GooglePlayDeveloperReportingV1alpha1App.from_dict(google_play_developer_reporting_v1alpha1_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


