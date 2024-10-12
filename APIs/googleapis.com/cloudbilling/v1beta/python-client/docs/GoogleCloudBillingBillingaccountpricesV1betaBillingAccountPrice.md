# GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice

Encapsulates the latest price for a billing account SKU.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | ISO-4217 currency code for the price. | [optional] 
**name** | **str** | Resource name for the latest billing account price. | [optional] 
**price_reason** | [**GoogleCloudBillingBillingaccountpricesV1betaPriceReason**](GoogleCloudBillingBillingaccountpricesV1betaPriceReason.md) |  | [optional] 
**rate** | [**GoogleCloudBillingBillingaccountpricesV1betaRate**](GoogleCloudBillingBillingaccountpricesV1betaRate.md) |  | [optional] 
**value_type** | **str** | Type of the price. The possible values are: [\&quot;unspecified\&quot;, \&quot;rate\&quot;]. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_billing_billingaccountprices_v1beta_billing_account_price import GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice from a JSON string
google_cloud_billing_billingaccountprices_v1beta_billing_account_price_instance = GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice.to_json())

# convert the object into a dict
google_cloud_billing_billingaccountprices_v1beta_billing_account_price_dict = google_cloud_billing_billingaccountprices_v1beta_billing_account_price_instance.to_dict()
# create an instance of GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice from a dict
google_cloud_billing_billingaccountprices_v1beta_billing_account_price_from_dict = GoogleCloudBillingBillingaccountpricesV1betaBillingAccountPrice.from_dict(google_cloud_billing_billingaccountprices_v1beta_billing_account_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


