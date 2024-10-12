# GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse

Response that contains the promotions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**promotions** | [**List[GoogleCloudPaymentsResellerSubscriptionV1Promotion]**](GoogleCloudPaymentsResellerSubscriptionV1Promotion.md) | The promotions for the specified partner. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_list_promotions_response import GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse from a JSON string
google_cloud_payments_reseller_subscription_v1_list_promotions_response_instance = GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_list_promotions_response_dict = google_cloud_payments_reseller_subscription_v1_list_promotions_response_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse from a dict
google_cloud_payments_reseller_subscription_v1_list_promotions_response_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ListPromotionsResponse.from_dict(google_cloud_payments_reseller_subscription_v1_list_promotions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


