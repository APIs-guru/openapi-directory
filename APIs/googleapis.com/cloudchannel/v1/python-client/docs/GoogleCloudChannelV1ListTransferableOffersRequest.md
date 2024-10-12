# GoogleCloudChannelV1ListTransferableOffersRequest

Request message for CloudChannelService.ListTransferableOffers

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | Optional. The Billing Account to look up Offers for. Format: accounts/{account_id}/billingAccounts/{billing_account_id}. This field is only relevant for multi-currency accounts. It should be left empty for single currency accounts. | [optional] 
**cloud_identity_id** | **str** | Customer&#39;s Cloud Identity ID | [optional] 
**customer_name** | **str** | A reseller should create a customer and use the resource name of that customer here. | [optional] 
**language_code** | **str** | Optional. The BCP-47 language code. For example, \&quot;en-US\&quot;. The response will localize in the corresponding language code, if specified. The default value is \&quot;en-US\&quot;. | [optional] 
**page_size** | **int** | Requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 offers. The maximum value is 1000; the server will coerce values above 1000. | [optional] 
**page_token** | **str** | A token for a page of results other than the first page. Obtained using ListTransferableOffersResponse.next_page_token of the previous CloudChannelService.ListTransferableOffers call. | [optional] 
**sku** | **str** | Required. The SKU to look up Offers for. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_transferable_offers_request import GoogleCloudChannelV1ListTransferableOffersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListTransferableOffersRequest from a JSON string
google_cloud_channel_v1_list_transferable_offers_request_instance = GoogleCloudChannelV1ListTransferableOffersRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListTransferableOffersRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_transferable_offers_request_dict = google_cloud_channel_v1_list_transferable_offers_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListTransferableOffersRequest from a dict
google_cloud_channel_v1_list_transferable_offers_request_from_dict = GoogleCloudChannelV1ListTransferableOffersRequest.from_dict(google_cloud_channel_v1_list_transferable_offers_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


