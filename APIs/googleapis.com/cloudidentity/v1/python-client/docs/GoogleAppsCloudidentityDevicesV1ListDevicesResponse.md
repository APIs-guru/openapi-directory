# GoogleAppsCloudidentityDevicesV1ListDevicesResponse

Response message that is returned from the ListDevices method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices** | [**List[GoogleAppsCloudidentityDevicesV1Device]**](GoogleAppsCloudidentityDevicesV1Device.md) | Devices meeting the list restrictions. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. Empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_list_devices_response import GoogleAppsCloudidentityDevicesV1ListDevicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1ListDevicesResponse from a JSON string
google_apps_cloudidentity_devices_v1_list_devices_response_instance = GoogleAppsCloudidentityDevicesV1ListDevicesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1ListDevicesResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_list_devices_response_dict = google_apps_cloudidentity_devices_v1_list_devices_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1ListDevicesResponse from a dict
google_apps_cloudidentity_devices_v1_list_devices_response_from_dict = GoogleAppsCloudidentityDevicesV1ListDevicesResponse.from_dict(google_apps_cloudidentity_devices_v1_list_devices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


