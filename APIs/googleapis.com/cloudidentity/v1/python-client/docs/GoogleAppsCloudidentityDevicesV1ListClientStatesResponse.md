# GoogleAppsCloudidentityDevicesV1ListClientStatesResponse

Response message that is returned in ListClientStates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_states** | [**List[GoogleAppsCloudidentityDevicesV1ClientState]**](GoogleAppsCloudidentityDevicesV1ClientState.md) | Client states meeting the list restrictions. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results. Empty if there are no more results. | [optional] 

## Example

```python
from openapi_client.models.google_apps_cloudidentity_devices_v1_list_client_states_response import GoogleAppsCloudidentityDevicesV1ListClientStatesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAppsCloudidentityDevicesV1ListClientStatesResponse from a JSON string
google_apps_cloudidentity_devices_v1_list_client_states_response_instance = GoogleAppsCloudidentityDevicesV1ListClientStatesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleAppsCloudidentityDevicesV1ListClientStatesResponse.to_json())

# convert the object into a dict
google_apps_cloudidentity_devices_v1_list_client_states_response_dict = google_apps_cloudidentity_devices_v1_list_client_states_response_instance.to_dict()
# create an instance of GoogleAppsCloudidentityDevicesV1ListClientStatesResponse from a dict
google_apps_cloudidentity_devices_v1_list_client_states_response_from_dict = GoogleAppsCloudidentityDevicesV1ListClientStatesResponse.from_dict(google_apps_cloudidentity_devices_v1_list_client_states_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


