# GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse

Response message for ListBillingAccountSkuGroupSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_sku_group_skus** | [**List[GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku]**](GoogleCloudBillingBillingaccountskugroupskusV1betaBillingAccountSkuGroupSku.md) | The returned billing account SKU group SKUs. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskugroupskus_v1beta_list_billing_account_sku_group_skus_response import GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse from a JSON string
google_cloud_billing_billingaccountskugroupskus_v1beta_list_billing_account_sku_group_skus_response_instance = GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskugroupskus_v1beta_list_billing_account_sku_group_skus_response_dict = google_cloud_billing_billingaccountskugroupskus_v1beta_list_billing_account_sku_group_skus_response_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse from a dict
google_cloud_billing_billingaccountskugroupskus_v1beta_list_billing_account_sku_group_skus_response_from_dict = GoogleCloudBillingBillingaccountskugroupskusV1betaListBillingAccountSkuGroupSkusResponse.from_dict(google_cloud_billing_billingaccountskugroupskus_v1beta_list_billing_account_sku_group_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


