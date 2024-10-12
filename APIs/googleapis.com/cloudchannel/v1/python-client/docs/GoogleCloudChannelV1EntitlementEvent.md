# GoogleCloudChannelV1EntitlementEvent

Represents Pub/Sub message content describing entitlement update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entitlement** | **str** | Resource name of an entitlement of the form: accounts/{account_id}/customers/{customer_id}/entitlements/{entitlement_id} | [optional] 
**event_type** | **str** | Type of event which happened on the entitlement. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_entitlement_event import GoogleCloudChannelV1EntitlementEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1EntitlementEvent from a JSON string
google_cloud_channel_v1_entitlement_event_instance = GoogleCloudChannelV1EntitlementEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1EntitlementEvent.to_json())

# convert the object into a dict
google_cloud_channel_v1_entitlement_event_dict = google_cloud_channel_v1_entitlement_event_instance.to_dict()
# create an instance of GoogleCloudChannelV1EntitlementEvent from a dict
google_cloud_channel_v1_entitlement_event_from_dict = GoogleCloudChannelV1EntitlementEvent.from_dict(google_cloud_channel_v1_entitlement_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


