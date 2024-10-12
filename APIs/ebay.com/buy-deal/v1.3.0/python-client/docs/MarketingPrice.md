# MarketingPrice

A type that describes the seller discount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_amount** | [**Amount**](Amount.md) |  | [optional] 
**discount_percentage** | **str** | The percentage of the seller discount based on the value returned in the originalPrice field. | [optional] 
**original_price** | [**Amount**](Amount.md) |  | [optional] 
**price_treatment** | **str** | The pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects how and where the discounted price can be displayed. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/deal/types/api:PriceTreatmentEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

## Example

```python
from openapi_client.models.marketing_price import MarketingPrice

# TODO update the JSON string below
json = "{}"
# create an instance of MarketingPrice from a JSON string
marketing_price_instance = MarketingPrice.from_json(json)
# print the JSON string representation of the object
print(MarketingPrice.to_json())

# convert the object into a dict
marketing_price_dict = marketing_price_instance.to_dict()
# create an instance of MarketingPrice from a dict
marketing_price_from_dict = MarketingPrice.from_dict(marketing_price_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


