# GoogleCloudBillingBillingaccountpricesV1betaRateTier

Encapsulates a rate price tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contract_price** | [**Money**](Money.md) |  | [optional] 
**effective_discount_percent** | [**Decimal**](Decimal.md) |  | [optional] 
**list_price** | [**Money**](Money.md) |  | [optional] 
**start_amount** | [**Decimal**](Decimal.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_rate_tier import GoogleCloudBillingBillingaccountpricesV1betaRateTier

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaRateTier from a JSON string
google_cloud_billing_billingaccountprices_v1beta_rate_tier_instance = GoogleCloudBillingBillingaccountpricesV1betaRateTier.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaRateTier.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_rate_tier_dict = google_cloud_billing_billingaccountprices_v1beta_rate_tier_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaRateTier from a dict
google_cloud_billing_billingaccountprices_v1beta_rate_tier_from_dict = GoogleCloudBillingBillingaccountpricesV1betaRateTier.from_dict(google_cloud_billing_billingaccountprices_v1beta_rate_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


