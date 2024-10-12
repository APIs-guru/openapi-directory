# GoogleCloudBillingPricesV1betaRateTier

Encapsulates a rate price tier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**list_price** | [**Money**](Money.md) |  | [optional] 
**start_amount** | [**Decimal**](Decimal.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_prices_v1beta_rate_tier import GoogleCloudBillingPricesV1betaRateTier

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingPricesV1betaRateTier from a JSON string
google_cloud_billing_prices_v1beta_rate_tier_instance = GoogleCloudBillingPricesV1betaRateTier.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingPricesV1betaRateTier.to_json())

# convert the object into a dict
google_cloud_billing_prices_v1beta_rate_tier_dict = google_cloud_billing_prices_v1beta_rate_tier_instance.to_dict()
# create an instance of GoogleCloudBillingPricesV1betaRateTier from a dict
google_cloud_billing_prices_v1beta_rate_tier_from_dict = GoogleCloudBillingPricesV1betaRateTier.from_dict(google_cloud_billing_prices_v1beta_rate_tier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


