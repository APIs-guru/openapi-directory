# GoogleCloudChannelV1UnregisterSubscriberRequest

Request Message for UnregisterSubscriber.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | **str** | Required. Service account to unregister from subscriber access to the topic. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_unregister_subscriber_request import GoogleCloudChannelV1UnregisterSubscriberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1UnregisterSubscriberRequest from a JSON string
google_cloud_channel_v1_unregister_subscriber_request_instance = GoogleCloudChannelV1UnregisterSubscriberRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1UnregisterSubscriberRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_unregister_subscriber_request_dict = google_cloud_channel_v1_unregister_subscriber_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1UnregisterSubscriberRequest from a dict
google_cloud_channel_v1_unregister_subscriber_request_from_dict = GoogleCloudChannelV1UnregisterSubscriberRequest.from_dict(google_cloud_channel_v1_unregister_subscriber_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


