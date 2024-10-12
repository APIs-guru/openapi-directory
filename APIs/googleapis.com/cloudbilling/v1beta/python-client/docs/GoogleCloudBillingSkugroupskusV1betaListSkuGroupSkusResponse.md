# GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse

Response message for ListSkuGroupSkus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token that can be sent as &#x60;page_token&#x60; in the subsequent request to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**sku_group_skus** | [**List[GoogleCloudBillingSkugroupskusV1betaSkuGroupSku]**](GoogleCloudBillingSkugroupskusV1betaSkuGroupSku.md) | The returned SKU group SKUs. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_skugroupskus_v1beta_list_sku_group_skus_response import GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse from a JSON string
google_cloud_billing_skugroupskus_v1beta_list_sku_group_skus_response_instance = GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse.to_json())

# convert the object into a dict
google_cloud_billing_skugroupskus_v1beta_list_sku_group_skus_response_dict = google_cloud_billing_skugroupskus_v1beta_list_sku_group_skus_response_instance.to_dict()
# create an instance of GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse from a dict
google_cloud_billing_skugroupskus_v1beta_list_sku_group_skus_response_from_dict = GoogleCloudBillingSkugroupskusV1betaListSkuGroupSkusResponse.from_dict(google_cloud_billing_skugroupskus_v1beta_list_sku_group_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


