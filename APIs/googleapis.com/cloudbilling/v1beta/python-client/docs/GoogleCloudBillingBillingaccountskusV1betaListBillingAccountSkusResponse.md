# GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse

Response message for ListBillingAccountSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_skus** | [**List[GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku]**](GoogleCloudBillingBillingaccountskusV1betaBillingAccountSku.md) | The returned billing account SKUs. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountskus_v1beta_list_billing_account_skus_response import GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse from a JSON string
google_cloud_billing_billingaccountskus_v1beta_list_billing_account_skus_response_instance = GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountskus_v1beta_list_billing_account_skus_response_dict = google_cloud_billing_billingaccountskus_v1beta_list_billing_account_skus_response_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse from a dict
google_cloud_billing_billingaccountskus_v1beta_list_billing_account_skus_response_from_dict = GoogleCloudBillingBillingaccountskusV1betaListBillingAccountSkusResponse.from_dict(google_cloud_billing_billingaccountskus_v1beta_list_billing_account_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


