# GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig

Configs the prices in an available region.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | [**GoogleCloudPaymentsResellerSubscriptionV1Amount**](GoogleCloudPaymentsResellerSubscriptionV1Amount.md) |  | [optional] 
**region_code** | **str** | Output only. 2-letter ISO region code where the product is available in. Ex. \&quot;US\&quot;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_product_price_config import GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig from a JSON string
google_cloud_payments_reseller_subscription_v1_product_price_config_instance = GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_product_price_config_dict = google_cloud_payments_reseller_subscription_v1_product_price_config_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig from a dict
google_cloud_payments_reseller_subscription_v1_product_price_config_from_dict = GoogleCloudPaymentsResellerSubscriptionV1ProductPriceConfig.from_dict(google_cloud_payments_reseller_subscription_v1_product_price_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


