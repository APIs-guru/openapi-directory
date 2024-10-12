# GoogleCloudChannelV1ListTransferableSkusRequest

Request message for CloudChannelService.ListTransferableSkus

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auth_token** | **str** | Optional. The super admin of the resold customer generates this token to authorize a reseller to access their Cloud Identity and purchase entitlements on their behalf. You can omit this token after authorization. See https://support.google.com/a/answer/7643790 for more details. | [optional] 
**cloud_identity_id** | **str** | Customer&#39;s Cloud Identity ID | [optional] 
**customer_name** | **str** | A reseller is required to create a customer and use the resource name of the created customer here. Customer_name uses the format: accounts/{account_id}/customers/{customer_id} | [optional] 
**language_code** | **str** | The BCP-47 language code. For example, \&quot;en-US\&quot;. The response will localize in the corresponding language code, if specified. The default value is \&quot;en-US\&quot;. Optional. | [optional] 
**page_size** | **int** | The requested page size. Server might return fewer results than requested. If unspecified, returns at most 100 SKUs. The maximum value is 1000; the server will coerce values above 1000. Optional. | [optional] 
**page_token** | **str** | A token for a page of results other than the first page. Obtained using ListTransferableSkusResponse.next_page_token of the previous CloudChannelService.ListTransferableSkus call. Optional. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_list_transferable_skus_request import GoogleCloudChannelV1ListTransferableSkusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ListTransferableSkusRequest from a JSON string
google_cloud_channel_v1_list_transferable_skus_request_instance = GoogleCloudChannelV1ListTransferableSkusRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ListTransferableSkusRequest.to_json())

# convert the object into a dict
google_cloud_channel_v1_list_transferable_skus_request_dict = google_cloud_channel_v1_list_transferable_skus_request_instance.to_dict()
# create an instance of GoogleCloudChannelV1ListTransferableSkusRequest from a dict
google_cloud_channel_v1_list_transferable_skus_request_from_dict = GoogleCloudChannelV1ListTransferableSkusRequest.from_dict(google_cloud_channel_v1_list_transferable_skus_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


