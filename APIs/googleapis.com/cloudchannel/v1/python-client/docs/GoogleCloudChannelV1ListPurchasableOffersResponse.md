# GoogleCloudChannelV1ListPurchasableOffersResponse

Response message for ListPurchasableOffers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. | [optional] 
**purchasable_offers** | [**List[GoogleCloudChannelV1PurchasableOffer]**](GoogleCloudChannelV1PurchasableOffer.md) | The list of Offers requested. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_purchasable_offers_response import GoogleCloudChannelV1ListPurchasableOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListPurchasableOffersResponse from a JSON string
google_cloud_channel_v1_list_purchasable_offers_response_instance = GoogleCloudChannelV1ListPurchasableOffersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListPurchasableOffersResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_purchasable_offers_response_dict = google_cloud_channel_v1_list_purchasable_offers_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListPurchasableOffersResponse from a dict
google_cloud_channel_v1_list_purchasable_offers_response_from_dict = GoogleCloudChannelV1ListPurchasableOffersResponse.from_dict(google_cloud_channel_v1_list_purchasable_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


