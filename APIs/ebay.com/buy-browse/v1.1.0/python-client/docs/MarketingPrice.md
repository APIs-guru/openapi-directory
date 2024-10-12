# MarketingPrice

The type that defines the fields that describe a seller discount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discount_amount** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**discount_percentage** | **str** | This field expresses the percentage of the seller discount based on the value in the originalPrice container. | [optional] 
**original_price** | [**ConvertedAmount**](ConvertedAmount.md) |  | [optional] 
**price_treatment** | **str** | Indicates the pricing treatment (discount) that was applied to the price of the item. Note: The pricing treatment affects the way and where the discounted price can be displayed. For implementation help, refer to &lt;a href&#x3D;&#39;https://developer.ebay.com/api-docs/buy/browse/types/gct:PriceTreatmentEnum&#39;&gt;eBay API documentation&lt;/a&gt; | [optional] 

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


