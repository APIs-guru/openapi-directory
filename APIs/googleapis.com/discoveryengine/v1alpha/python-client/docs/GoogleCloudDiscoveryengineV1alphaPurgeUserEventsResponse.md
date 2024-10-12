# GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purge_count** | **str** | The total count of events purged as a result of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1alpha_purge_user_events_response import GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse from a JSON string
google_cloud_discoveryengine_v1alpha_purge_user_events_response_instance = GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1alpha_purge_user_events_response_dict = google_cloud_discoveryengine_v1alpha_purge_user_events_response_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse from a dict
google_cloud_discoveryengine_v1alpha_purge_user_events_response_from_dict = GoogleCloudDiscoveryengineV1alphaPurgeUserEventsResponse.from_dict(google_cloud_discoveryengine_v1alpha_purge_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


