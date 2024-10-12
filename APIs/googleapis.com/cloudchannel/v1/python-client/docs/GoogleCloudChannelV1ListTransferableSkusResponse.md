# GoogleCloudChannelV1ListTransferableSkusResponse

Response message for CloudChannelService.ListTransferableSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. Pass to ListTransferableSkusRequest.page_token to obtain that page. | [optional] 
**transferable_skus** | [**List[GoogleCloudChannelV1TransferableSku]**](GoogleCloudChannelV1TransferableSku.md) | Information about existing SKUs for a customer that needs a transfer. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_transferable_skus_response import GoogleCloudChannelV1ListTransferableSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListTransferableSkusResponse from a JSON string
google_cloud_channel_v1_list_transferable_skus_response_instance = GoogleCloudChannelV1ListTransferableSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListTransferableSkusResponse.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_transferable_skus_response_dict = google_cloud_channel_v1_list_transferable_skus_response_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListTransferableSkusResponse from a dict
google_cloud_channel_v1_list_transferable_skus_response_from_dict = GoogleCloudChannelV1ListTransferableSkusResponse.from_dict(google_cloud_channel_v1_list_transferable_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


