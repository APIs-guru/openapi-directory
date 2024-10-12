# GoogleCloudChannelV1RegisterSubscriberRequest

Request Message for RegisterSubscriber.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_account** | **str** | Required. Service account that provides subscriber access to the registered topic. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_register_subscriber_request import GoogleCloudChannelV1RegisterSubscriberRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RegisterSubscriberRequest from a JSON string
google_cloud_channel_v1_register_subscriber_request_instance = GoogleCloudChannelV1RegisterSubscriberRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RegisterSubscriberRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_register_subscriber_request_dict = google_cloud_channel_v1_register_subscriber_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1RegisterSubscriberRequest from a dict
google_cloud_channel_v1_register_subscriber_request_from_dict = GoogleCloudChannelV1RegisterSubscriberRequest.from_dict(google_cloud_channel_v1_register_subscriber_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


