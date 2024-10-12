# GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse

Response that contains the products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**products** | [**List[GoogleCloudPaymentsResellerSubscriptionV1Product]**](GoogleCloudPaymentsResellerSubscriptionV1Product.md) | The products for the specified partner. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_list_products_response import GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse from a JSON string
google_cloud_payments_reseller_subscription_v1_list_products_response_instance = GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_list_products_response_dict = google_cloud_payments_reseller_subscription_v1_list_products_response_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse from a dict
google_cloud_payments_reseller_subscription_v1_list_products_response_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ListProductsResponse.from_dict(google_cloud_payments_reseller_subscription_v1_list_products_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


