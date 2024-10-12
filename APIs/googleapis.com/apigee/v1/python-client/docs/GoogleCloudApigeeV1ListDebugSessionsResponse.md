# GoogleCloudApigeeV1ListDebugSessionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no subsequent pages exist. | [optional] 
**sessions** | [**List[GoogleCloudApigeeV1Session]**](GoogleCloudApigeeV1Session.md) | Session info that includes debug session ID and the first transaction creation timestamp. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_debug_sessions_response import GoogleCloudApigeeV1ListDebugSessionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListDebugSessionsResponse from a JSON string
google_cloud_apigee_v1_list_debug_sessions_response_instance = GoogleCloudApigeeV1ListDebugSessionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListDebugSessionsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_debug_sessions_response_dict = google_cloud_apigee_v1_list_debug_sessions_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListDebugSessionsResponse from a dict
google_cloud_apigee_v1_list_debug_sessions_response_from_dict = GoogleCloudApigeeV1ListDebugSessionsResponse.from_dict(google_cloud_apigee_v1_list_debug_sessions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


