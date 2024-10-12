# GoogleCloudBillingPricesV1betaListPricesResponse

Response message for ListPrices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**prices** | [**List[GoogleCloudBillingPricesV1betaPrice]**](GoogleCloudBillingPricesV1betaPrice.md) | The returned publicly listed prices. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_prices_v1beta_list_prices_response import GoogleCloudBillingPricesV1betaListPricesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingPricesV1betaListPricesResponse from a JSON string
google_cloud_billing_prices_v1beta_list_prices_response_instance = GoogleCloudBillingPricesV1betaListPricesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingPricesV1betaListPricesResponse.to_json())

# convert the object into a dict
google_cloud_billing_prices_v1beta_list_prices_response_dict = google_cloud_billing_prices_v1beta_list_prices_response_instance.to_dict()
# create an instance of GoogleCloudBillingPricesV1betaListPricesResponse from a dict
google_cloud_billing_prices_v1beta_list_prices_response_from_dict = GoogleCloudBillingPricesV1betaListPricesResponse.from_dict(google_cloud_billing_prices_v1beta_list_prices_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


