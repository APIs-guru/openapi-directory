# GoogleCloudChannelV1ListTransferableOffersResponse

Response message for CloudChannelService.ListTransferableOffers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListTransferableOffersRequest.page_token to obtain that page. | [optional] 
**transferable_offers** | [**List[GoogleCloudChannelV1TransferableOffer]**](GoogleCloudChannelV1TransferableOffer.md) | Information about Offers for a customer that can be used for transfer. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_transferable_offers_response import GoogleCloudChannelV1ListTransferableOffersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListTransferableOffersResponse from a JSON string
google_cloud_channel_v1_list_transferable_offers_response_instance = GoogleCloudChannelV1ListTransferableOffersResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListTransferableOffersResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_transferable_offers_response_dict = google_cloud_channel_v1_list_transferable_offers_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListTransferableOffersResponse from a dict
google_cloud_channel_v1_list_transferable_offers_response_from_dict = GoogleCloudChannelV1ListTransferableOffersResponse.from_dict(google_cloud_channel_v1_list_transferable_offers_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


