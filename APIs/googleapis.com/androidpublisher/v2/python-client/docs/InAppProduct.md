# InAppProduct


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_language** | **str** | The default language of the localized data, as defined by BCP 47. e.g. \&quot;en-US\&quot;, \&quot;en-GB\&quot;. | [optional] 
**default_price** | [**Price**](Price.md) |  | [optional] 
**grace_period** | **str** | Grace period of the subscription, specified in ISO 8601 format. It will allow developers to give their subscribers a grace period when the payment for the new recurrence period is declined. Acceptable values &#x3D; \&quot;P3D\&quot; (three days), \&quot;P7D\&quot; (seven days), \&quot;P14D\&quot; (fourteen days), and \&quot;P30D\&quot; (thirty days) | [optional] 
**listings** | [**Dict[str, InAppProductListing]**](InAppProductListing.md) | List of localized title and description data. | [optional] 
**package_name** | **str** | The package name of the parent app. | [optional] 
**prices** | [**Dict[str, Price]**](Price.md) | Prices per buyer region. None of these prices should be zero. In-app products can never be free. | [optional] 
**purchase_type** | **str** | Purchase type enum value. Unmodifiable after creation. | [optional] 
**sku** | **str** | The stock-keeping-unit (SKU) of the product, unique within an app. | [optional] 
**status** | **str** |  | [optional] 
**subscription_period** | **str** | Subscription period, specified in ISO 8601 format. Acceptable values are \&quot;P1W\&quot; (one week), \&quot;P1M\&quot; (one month), \&quot;P3M\&quot; (three months), \&quot;P6M\&quot; (six months), and \&quot;P1Y\&quot; (one year). | [optional] 
**trial_period** | **str** | Trial period, specified in ISO 8601 format. Acceptable values are anything between \&quot;P7D\&quot; (seven days) and \&quot;P999D\&quot; (999 days). Seasonal subscriptions cannot have a trial period. | [optional] 

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


