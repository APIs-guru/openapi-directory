# GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse

Response message for ListBillingAccountPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account_prices** | [**List[GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice]**](GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice.md) | The returned billing account prices. | [optional] 
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_list_billing_account_prices_response import GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse from a JSON string
google_cloud_billing_billingaccountprices_v1beta_list_billing_account_prices_response_instance = GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_list_billing_account_prices_response_dict = google_cloud_billing_billingaccountprices_v1beta_list_billing_account_prices_response_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse from a dict
google_cloud_billing_billingaccountprices_v1beta_list_billing_account_prices_response_from_dict = GoogleCloudBillingBillingaccountpricesV1betaListBillingAccountPricesResponse.from_dict(google_cloud_billing_billingaccountprices_v1beta_list_billing_account_prices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


