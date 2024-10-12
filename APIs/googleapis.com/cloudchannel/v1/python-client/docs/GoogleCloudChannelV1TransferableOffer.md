# GoogleCloudChannelV1TransferableOffer

TransferableOffer represents an Offer that can be used in Transfer. Read-only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | [**GoogleCloudChannelV1Offer**](GoogleCloudChannelV1Offer.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_transferable_offer import GoogleCloudChannelV1TransferableOffer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1TransferableOffer from a JSON string
google_cloud_channel_v1_transferable_offer_instance = GoogleCloudChannelV1TransferableOffer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1TransferableOffer.to_json())

# convert the object into a dict
google_cloud_channel_v1_transferable_offer_dict = google_cloud_channel_v1_transferable_offer_instance.to_dict()
# create an instance of GoogleCloudChannelV1TransferableOffer from a dict
google_cloud_channel_v1_transferable_offer_from_dict = GoogleCloudChannelV1TransferableOffer.from_dict(google_cloud_channel_v1_transferable_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


