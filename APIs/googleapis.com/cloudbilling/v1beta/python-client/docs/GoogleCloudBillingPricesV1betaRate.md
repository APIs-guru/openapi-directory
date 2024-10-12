# GoogleCloudBillingPricesV1betaRate

Encapsulates a `Rate` price. SKUs with `Rate` price are offered by pricing tiers. The price have 1 or more rate pricing tiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_info** | [**GoogleCloudBillingPricesV1betaAggregationInfo**](GoogleCloudBillingPricesV1betaAggregationInfo.md) |  | [optional] 
**tiers** | [**List[GoogleCloudBillingPricesV1betaRateTier]**](GoogleCloudBillingPricesV1betaRateTier.md) | All tiers associated with the &#x60;Rate&#x60; price. | [optional] 
**unit_info** | [**GoogleCloudBillingPricesV1betaUnitInfo**](GoogleCloudBillingPricesV1betaUnitInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_prices_v1beta_rate import GoogleCloudBillingPricesV1betaRate

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingPricesV1betaRate from a JSON string
google_cloud_billing_prices_v1beta_rate_instance = GoogleCloudBillingPricesV1betaRate.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingPricesV1betaRate.to_json())

# convert the object into a dict
google_cloud_billing_prices_v1beta_rate_dict = google_cloud_billing_prices_v1beta_rate_instance.to_dict()
# create an instance of GoogleCloudBillingPricesV1betaRate from a dict
google_cloud_billing_prices_v1beta_rate_from_dict = GoogleCloudBillingPricesV1betaRate.from_dict(google_cloud_billing_prices_v1beta_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


