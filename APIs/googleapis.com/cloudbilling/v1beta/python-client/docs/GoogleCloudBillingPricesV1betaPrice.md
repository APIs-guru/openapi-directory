# GoogleCloudBillingPricesV1betaPrice

Encapsulates the latest price for a SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | ISO-4217 currency code for the price. | [optional] 
**name** | **str** | Resource name for the latest price. | [optional] 
**rate** | [**GoogleCloudBillingPricesV1betaRate**](GoogleCloudBillingPricesV1betaRate.md) |  | [optional] 
**value_type** | **str** | Type of the price. It can have values: [\&quot;unspecified\&quot;, \&quot;rate\&quot;]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_prices_v1beta_price import GoogleCloudBillingPricesV1betaPrice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingPricesV1betaPrice from a JSON string
google_cloud_billing_prices_v1beta_price_instance = GoogleCloudBillingPricesV1betaPrice.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingPricesV1betaPrice.to_json())

# convert the object into a dict
google_cloud_billing_prices_v1beta_price_dict = google_cloud_billing_prices_v1beta_price_instance.to_dict()
# create an instance of GoogleCloudBillingPricesV1betaPrice from a dict
google_cloud_billing_prices_v1beta_price_from_dict = GoogleCloudBillingPricesV1betaPrice.from_dict(google_cloud_billing_prices_v1beta_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


