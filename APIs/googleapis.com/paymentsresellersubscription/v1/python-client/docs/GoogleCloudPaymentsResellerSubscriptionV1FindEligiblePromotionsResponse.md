# GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse

Response containing the found promotions for the current user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is empty, there are no subsequent pages. | [optional] 
**promotions** | [**List[GoogleCloudPaymentsResellerSubscriptionV1Promotion]**](GoogleCloudPaymentsResellerSubscriptionV1Promotion.md) | The promotions for the current user. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response import GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse from a JSON string
google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response_instance = GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response_dict = google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse from a dict
google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response_from_dict = GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsResponse.from_dict(google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


