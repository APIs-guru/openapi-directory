# InAppProduct

An in-app product. The resource for InappproductsService.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_language** | **str** | Default language of the localized data, as defined by BCP-47. e.g. \&quot;en-US\&quot;. | [optional] 
**default_price** | [**Price**](Price.md) |  | [optional] 
**grace_period** | **str** | Grace period of the subscription, specified in ISO 8601 format. Allows developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values are P0D (zero days), P3D (three days), P7D (seven days), P14D (14 days), and P30D (30 days). | [optional] 
**listings** | [**Dict[str, InAppProductListing]**](InAppProductListing.md) | List of localized title and description data. Map key is the language of the localized data, as defined by BCP-47, e.g. \&quot;en-US\&quot;. | [optional] 
**managed_product_taxes_and_compliance_settings** | [**ManagedProductTaxAndComplianceSettings**](ManagedProductTaxAndComplianceSettings.md) |  | [optional] 
**package_name** | **str** | Package name of the parent app. | [optional] 
**prices** | [**Dict[str, Price]**](Price.md) | Prices per buyer region. None of these can be zero, as in-app products are never free. Map key is region code, as defined by ISO 3166-2. | [optional] 
**purchase_type** | **str** | The type of the product, e.g. a recurring subscription. | [optional] 
**sku** | **str** | Stock-keeping-unit (SKU) of the product, unique within an app. | [optional] 
**status** | **str** | The status of the product, e.g. whether it&#39;s active. | [optional] 
**subscription_period** | **str** | Subscription period, specified in ISO 8601 format. Acceptable values are P1W (one week), P1M (one month), P3M (three months), P6M (six months), and P1Y (one year). | [optional] 
**subscription_taxes_and_compliance_settings** | [**SubscriptionTaxAndComplianceSettings**](SubscriptionTaxAndComplianceSettings.md) |  | [optional] 
**trial_period** | **str** | Trial period, specified in ISO 8601 format. Acceptable values are anything between P7D (seven days) and P999D (999 days). | [optional] 

## Example

```python
from openapi_client.models.in_app_product import InAppProduct

# TODO update the JSON string below
json = "{}"
# create an instance of InAppProduct from a JSON string
in_app_product_instance = InAppProduct.from_json(json)
# print the JSON string representation of the object
print(InAppProduct.to_json())

# convert the object into a dict
in_app_product_dict = in_app_product_instance.to_dict()
# create an instance of InAppProduct from a dict
in_app_product_from_dict = InAppProduct.from_dict(in_app_product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


