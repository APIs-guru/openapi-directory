# GoogleCloudApigeeV1Session

Session carries the debug session id and its creation time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The debug session ID. | [optional] 
**timestamp_ms** | **str** | The first transaction creation timestamp in millisecond, recorded by UAP. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_session import GoogleCloudApigeeV1Session

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Session from a JSON string
google_cloud_apigee_v1_session_instance = GoogleCloudApigeeV1Session.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Session.to_json())

# convert the object into a dict
google_cloud_apigee_v1_session_dict = google_cloud_apigee_v1_session_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Session from a dict
google_cloud_apigee_v1_session_from_dict = GoogleCloudApigeeV1Session.from_dict(google_cloud_apigee_v1_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


