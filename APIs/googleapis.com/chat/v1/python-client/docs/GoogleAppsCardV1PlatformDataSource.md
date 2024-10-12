# GoogleAppsCardV1PlatformDataSource

For a `SelectionInput` widget that uses a multiselect menu, a data source from Google Workspace. Used to populate items in a multiselect menu. [Google Chat apps](https://developers.google.com/chat):

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**common_data_source** | **str** | A data source shared by all Google Workspace applications, such as users in a Google Workspace organization. | [optional] 
**host_app_data_source** | [**HostAppDataSourceMarkup**](HostAppDataSourceMarkup.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_apps_card_v1_platform_data_source import GoogleAppsCardV1PlatformDataSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCardV1PlatformDataSource from a JSON string
google_apps_card_v1_platform_data_source_instance = GoogleAppsCardV1PlatformDataSource.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCardV1PlatformDataSource.to_json())

# convert the object into a dict
google_apps_card_v1_platform_data_source_dict = google_apps_card_v1_platform_data_source_instance.to_dict()
# create an instance of GoogleAppsCardV1PlatformDataSource from a dict
google_apps_card_v1_platform_data_source_from_dict = GoogleAppsCardV1PlatformDataSource.from_dict(google_apps_card_v1_platform_data_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


