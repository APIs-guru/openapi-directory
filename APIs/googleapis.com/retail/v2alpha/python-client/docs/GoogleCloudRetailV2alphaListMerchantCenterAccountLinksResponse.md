# GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse

Response for MerchantCenterAccountLinkService.ListMerchantCenterAccountLinks method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_center_account_links** | [**List[GoogleCloudRetailV2alphaMerchantCenterAccountLink]**](GoogleCloudRetailV2alphaMerchantCenterAccountLink.md) | The links. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_list_merchant_center_account_links_response import GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse from a JSON string
google_cloud_retail_v2alpha_list_merchant_center_account_links_response_instance = GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_list_merchant_center_account_links_response_dict = google_cloud_retail_v2alpha_list_merchant_center_account_links_response_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse from a dict
google_cloud_retail_v2alpha_list_merchant_center_account_links_response_from_dict = GoogleCloudRetailV2alphaListMerchantCenterAccountLinksResponse.from_dict(google_cloud_retail_v2alpha_list_merchant_center_account_links_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


