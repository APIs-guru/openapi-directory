# IntroductoryPriceInfo

Contains the introductory price information for a subscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**introductory_price_amount_micros** | **str** | Introductory price of the subscription, not including tax. The currency is the same as price_currency_code. Price is expressed in micro-units, where 1,000,000 micro-units represents one unit of the currency. For example, if the subscription price is €1.99, price_amount_micros is 1990000. | [optional] 
**introductory_price_currency_code** | **str** | ISO 4217 currency code for the introductory subscription price. For example, if the price is specified in British pounds sterling, price_currency_code is \&quot;GBP\&quot;. | [optional] 
**introductory_price_cycles** | **int** | The number of billing period to offer introductory pricing. | [optional] 
**introductory_price_period** | **str** | Introductory price period, specified in ISO 8601 format. Common values are (but not limited to) \&quot;P1W\&quot; (one week), \&quot;P1M\&quot; (one month), \&quot;P3M\&quot; (three months), \&quot;P6M\&quot; (six months), and \&quot;P1Y\&quot; (one year). | [optional] 

## Example

```python
from openapi_client.models.introductory_price_info import IntroductoryPriceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IntroductoryPriceInfo from a JSON string
introductory_price_info_instance = IntroductoryPriceInfo.from_json(json)
# print the JSON string representation of the object
print(IntroductoryPriceInfo.to_json())

# convert the object into a dict
introductory_price_info_dict = introductory_price_info_instance.to_dict()
# create an instance of IntroductoryPriceInfo from a dict
introductory_price_info_from_dict = IntroductoryPriceInfo.from_dict(introductory_price_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


