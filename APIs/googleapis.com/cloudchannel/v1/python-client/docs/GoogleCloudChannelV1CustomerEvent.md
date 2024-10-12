# GoogleCloudChannelV1CustomerEvent

Represents Pub/Sub message content describing customer update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer** | **str** | Resource name of the customer. Format: accounts/{account_id}/customers/{customer_id} | [optional] 
**event_type** | **str** | Type of event which happened on the customer. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_customer_event import GoogleCloudChannelV1CustomerEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CustomerEvent from a JSON string
google_cloud_channel_v1_customer_event_instance = GoogleCloudChannelV1CustomerEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CustomerEvent.to_json())

# convert the object into a dict
google_cloud_channel_v1_customer_event_dict = google_cloud_channel_v1_customer_event_instance.to_dict()
# create an instance of GoogleCloudChannelV1CustomerEvent from a dict
google_cloud_channel_v1_customer_event_from_dict = GoogleCloudChannelV1CustomerEvent.from_dict(google_cloud_channel_v1_customer_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


