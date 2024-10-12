# PriceInsights

Price insights fields requested by the merchant in the query. Field values are only set if the merchant queries `PriceInsightsProductView`. https://support.google.com/merchants/answer/11916926

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**predicted_clicks_change_fraction** | **float** | The predicted change in clicks as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in clicks. | [optional] 
**predicted_conversions_change_fraction** | **float** | The predicted change in conversions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in conversions). | [optional] 
**predicted_gross_profit_change_fraction** | **float** | *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in gross profit. | [optional] 
**predicted_impressions_change_fraction** | **float** | The predicted change in impressions as a fraction after introducing the suggested price compared to current active price. For example, 0.05 is a 5% predicted increase in impressions. | [optional] 
**predicted_monthly_gross_profit_change_currency_code** | **str** | *Deprecated*: This field is no longer supported and will start returning USD for all requests. The predicted monthly gross profit change currency (ISO 4217 code). | [optional] 
**predicted_monthly_gross_profit_change_micros** | **str** | *Deprecated*: This field is no longer supported and will start returning 0. The predicted change in gross profit in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros) after introducing the suggested price for a month compared to current active price. | [optional] 
**suggested_price_currency_code** | **str** | The suggested price currency (ISO 4217 code). | [optional] 
**suggested_price_micros** | **str** | The latest suggested price in micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros) for the product. | [optional] 

## Example

```python
from openapi_client.models.price_insights import PriceInsights

# TODO update the JSON string below
json = "{}"
# create an instance of PriceInsights from a JSON string
price_insights_instance = PriceInsights.from_json(json)
# print the JSON string representation of the object
print(PriceInsights.to_json())

# convert the object into a dict
price_insights_dict = price_insights_instance.to_dict()
# create an instance of PriceInsights from a dict
price_insights_from_dict = PriceInsights.from_dict(price_insights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


