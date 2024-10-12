# AdvertiserGeneralConfig

General settings of an advertiser.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | Required. Immutable. Advertiser&#39;s currency in ISO 4217 format. Accepted codes and the currencies they represent are: Currency Code : Currency Name * &#x60;ARS&#x60; : Argentine Peso * &#x60;AUD&#x60; : Australian Dollar * &#x60;BRL&#x60; : Brazilian Real * &#x60;CAD&#x60; : Canadian Dollar * &#x60;CHF&#x60; : Swiss Franc * &#x60;CLP&#x60; : Chilean Peso * &#x60;CNY&#x60; : Chinese Yuan * &#x60;COP&#x60; : Colombian Peso * &#x60;CZK&#x60; : Czech Koruna * &#x60;DKK&#x60; : Danish Krone * &#x60;EGP&#x60; : Egyption Pound * &#x60;EUR&#x60; : Euro * &#x60;GBP&#x60; : British Pound * &#x60;HKD&#x60; : Hong Kong Dollar * &#x60;HUF&#x60; : Hungarian Forint * &#x60;IDR&#x60; : Indonesian Rupiah * &#x60;ILS&#x60; : Israeli Shekel * &#x60;INR&#x60; : Indian Rupee * &#x60;JPY&#x60; : Japanese Yen * &#x60;KRW&#x60; : South Korean Won * &#x60;MXN&#x60; : Mexican Pesos * &#x60;MYR&#x60; : Malaysian Ringgit * &#x60;NGN&#x60; : Nigerian Naira * &#x60;NOK&#x60; : Norwegian Krone * &#x60;NZD&#x60; : New Zealand Dollar * &#x60;PEN&#x60; : Peruvian Nuevo Sol * &#x60;PLN&#x60; : Polish Zloty * &#x60;RON&#x60; : New Romanian Leu * &#x60;RUB&#x60; : Russian Ruble * &#x60;SEK&#x60; : Swedish Krona * &#x60;TRY&#x60; : Turkish Lira * &#x60;TWD&#x60; : New Taiwan Dollar * &#x60;USD&#x60; : US Dollar * &#x60;ZAR&#x60; : South African Rand | [optional] 
**domain_url** | **str** | Required. The domain URL of the advertiser&#39;s primary website. The system will send this information to publishers that require website URL to associate a campaign with an advertiser. Provide a URL with no path or query string, beginning with &#x60;http:&#x60; or &#x60;https:&#x60;. For example, http://www.example.com | [optional] 
**time_zone** | **str** | Output only. The standard TZ database name of the advertiser&#39;s time zone. For example, &#x60;America/New_York&#x60;. See more at: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones For CM360 hybrid advertisers, the time zone is the same as that of the associated CM360 account; for third-party only advertisers, the time zone is the same as that of the parent partner. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advertiser_general_config import AdvertiserGeneralConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AdvertiserGeneralConfig from a JSON string
advertiser_general_config_instance = AdvertiserGeneralConfig.from_json(json)
# print the JSON string representation of the object
print(AdvertiserGeneralConfig.to_json())

# convert the object into a dict
advertiser_general_config_dict = advertiser_general_config_instance.to_dict()
# create an instance of AdvertiserGeneralConfig from a dict
advertiser_general_config_from_dict = AdvertiserGeneralConfig.from_dict(advertiser_general_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


