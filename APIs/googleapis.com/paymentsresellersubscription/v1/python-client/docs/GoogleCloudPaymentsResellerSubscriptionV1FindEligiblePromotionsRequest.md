# GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest

Request to find eligible promotions for the current user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Optional. Specifies the filters for the promotion results. The syntax is defined in https://google.aip.dev/160 with the following caveats: 1. Only the following features are supported: - Logical operator &#x60;AND&#x60; - Comparison operator &#x60;&#x3D;&#x60; (no wildcards &#x60;*&#x60;) - Traversal operator &#x60;.&#x60; - Has operator &#x60;:&#x60; (no wildcards &#x60;*&#x60;) 2. Only the following fields are supported: - &#x60;applicableProducts&#x60; - &#x60;regionCodes&#x60; - &#x60;youtubePayload.partnerEligibilityId&#x60; - &#x60;youtubePayload.postalCode&#x60; 3. Unless explicitly mentioned above, other features are not supported. Example: &#x60;applicableProducts:partners/partner1/products/product1 AND regionCodes:US AND youtubePayload.postalCode&#x3D;94043 AND youtubePayload.partnerEligibilityId&#x3D;eligibility-id&#x60; | [optional] 
**page_size** | **int** | Optional. The maximum number of promotions to return. The service may return fewer than this value. If unspecified, at most 50 products will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000. | [optional] 
**page_token** | **str** | Optional. A page token, received from a previous &#x60;ListPromotions&#x60; call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to &#x60;ListPromotions&#x60; must match the call that provided the page token. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request import GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest from a JSON string
google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request_instance = GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request_dict = google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest from a dict
google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request_from_dict = GoogleCloudPaymentsResellerSubscriptionV1FindEligiblePromotionsRequest.from_dict(google_cloud_payments_reseller_subscription_v1_find_eligible_promotions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


