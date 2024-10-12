# GoogleCloudChannelV1UnregisterSubscriberResponse

Response Message for UnregisterSubscriber.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**topic** | **str** | Name of the topic the service account subscriber access was removed from. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_unregister_subscriber_response import GoogleCloudChannelV1UnregisterSubscriberResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1UnregisterSubscriberResponse from a JSON string
google_cloud_channel_v1_unregister_subscriber_response_instance = GoogleCloudChannelV1UnregisterSubscriberResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1UnregisterSubscriberResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_unregister_subscriber_response_dict = google_cloud_channel_v1_unregister_subscriber_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1UnregisterSubscriberResponse from a dict
google_cloud_channel_v1_unregister_subscriber_response_from_dict = GoogleCloudChannelV1UnregisterSubscriberResponse.from_dict(google_cloud_channel_v1_unregister_subscriber_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


