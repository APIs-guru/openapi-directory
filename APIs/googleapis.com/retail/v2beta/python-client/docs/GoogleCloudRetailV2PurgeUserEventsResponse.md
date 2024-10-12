# GoogleCloudRetailV2PurgeUserEventsResponse

Response of the PurgeUserEventsRequest. If the long running operation is successfully done, then this message is returned by the google.longrunning.Operations.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purged_events_count** | **str** | The total count of events purged as a result of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_purge_user_events_response import GoogleCloudRetailV2PurgeUserEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2PurgeUserEventsResponse from a JSON string
google_cloud_retail_v2_purge_user_events_response_instance = GoogleCloudRetailV2PurgeUserEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2PurgeUserEventsResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2_purge_user_events_response_dict = google_cloud_retail_v2_purge_user_events_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2PurgeUserEventsResponse from a dict
google_cloud_retail_v2_purge_user_events_response_from_dict = GoogleCloudRetailV2PurgeUserEventsResponse.from_dict(google_cloud_retail_v2_purge_user_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


