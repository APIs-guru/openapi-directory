# GoogleCloudChannelV1PurchasableOffer

Offer that you can purchase for a customer. This is used in the ListPurchasableOffer API response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**offer** | [**GoogleCloudChannelV1Offer**](GoogleCloudChannelV1Offer.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_purchasable_offer import GoogleCloudChannelV1PurchasableOffer

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1PurchasableOffer from a JSON string
google_cloud_channel_v1_purchasable_offer_instance = GoogleCloudChannelV1PurchasableOffer.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1PurchasableOffer.to_json())

# convert the object into a dict
google_cloud_channel_v1_purchasable_offer_dict = google_cloud_channel_v1_purchasable_offer_instance.to_dict()
# create an instance of GoogleCloudChannelV1PurchasableOffer from a dict
google_cloud_channel_v1_purchasable_offer_from_dict = GoogleCloudChannelV1PurchasableOffer.from_dict(google_cloud_channel_v1_purchasable_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


