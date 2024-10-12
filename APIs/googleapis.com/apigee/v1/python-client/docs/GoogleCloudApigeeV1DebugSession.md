# GoogleCloudApigeeV1DebugSession


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Optional. The number of request to be traced. Min &#x3D; 1, Max &#x3D; 15, Default &#x3D; 10. | [optional] 
**create_time** | **str** | Output only. The first transaction creation timestamp, recorded by UAP. | [optional] [readonly] 
**filter** | **str** | Optional. A conditional statement which is evaluated against the request message to determine if it should be traced. Syntax matches that of on API Proxy bundle flow Condition. | [optional] 
**name** | **str** | A unique ID for this DebugSession. | [optional] 
**timeout** | **str** | Optional. The time in seconds after which this DebugSession should end. This value will override the value in query param, if both are provided. | [optional] 
**tracesize** | **int** | Optional. The maximum number of bytes captured from the response payload. Min &#x3D; 0, Max &#x3D; 5120, Default &#x3D; 5120. | [optional] 
**validity** | **int** | Optional. The length of time, in seconds, that this debug session is valid, starting from when it&#39;s received in the control plane. Min &#x3D; 1, Max &#x3D; 15, Default &#x3D; 10. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_debug_session import GoogleCloudApigeeV1DebugSession

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DebugSession from a JSON string
google_cloud_apigee_v1_debug_session_instance = GoogleCloudApigeeV1DebugSession.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DebugSession.to_json())

# convert the object into a dict
google_cloud_apigee_v1_debug_session_dict = google_cloud_apigee_v1_debug_session_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DebugSession from a dict
google_cloud_apigee_v1_debug_session_from_dict = GoogleCloudApigeeV1DebugSession.from_dict(google_cloud_apigee_v1_debug_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


