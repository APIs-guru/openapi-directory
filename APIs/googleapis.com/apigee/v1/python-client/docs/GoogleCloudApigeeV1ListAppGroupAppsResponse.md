# GoogleCloudApigeeV1ListAppGroupAppsResponse

Response for ListAppGroupApps

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_group_apps** | [**List[GoogleCloudApigeeV1AppGroupApp]**](GoogleCloudApigeeV1AppGroupApp.md) | List of AppGroup apps and their credentials. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;next_page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_app_group_apps_response import GoogleCloudApigeeV1ListAppGroupAppsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListAppGroupAppsResponse from a JSON string
google_cloud_apigee_v1_list_app_group_apps_response_instance = GoogleCloudApigeeV1ListAppGroupAppsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListAppGroupAppsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_app_group_apps_response_dict = google_cloud_apigee_v1_list_app_group_apps_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListAppGroupAppsResponse from a dict
google_cloud_apigee_v1_list_app_group_apps_response_from_dict = GoogleCloudApigeeV1ListAppGroupAppsResponse.from_dict(google_cloud_apigee_v1_list_app_group_apps_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


