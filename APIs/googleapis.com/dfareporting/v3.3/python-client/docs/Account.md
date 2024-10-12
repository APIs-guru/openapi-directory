# Account

Contains properties of a Campaign Manager account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_permission_ids** | **List[str]** | Account permissions assigned to this account. | [optional] 
**account_profile** | **str** | Profile for this account. This is a read-only field that can be left blank. | [optional] 
**active** | **bool** | Whether this account is active. | [optional] 
**active_ads_limit_tier** | **str** | Maximum number of active ads allowed for this account. | [optional] 
**active_view_opt_out** | **bool** | Whether to serve creatives with Active View tags. If disabled, viewability data will not be available for any impressions. | [optional] 
**available_permission_ids** | **List[str]** | User role permissions available to the user roles of this account. | [optional] 
**country_id** | **str** | ID of the country associated with this account. | [optional] 
**currency_id** | **str** | ID of currency associated with this account. This is a required field. Acceptable values are: - \&quot;1\&quot; for USD - \&quot;2\&quot; for GBP - \&quot;3\&quot; for ESP - \&quot;4\&quot; for SEK - \&quot;5\&quot; for CAD - \&quot;6\&quot; for JPY - \&quot;7\&quot; for DEM - \&quot;8\&quot; for AUD - \&quot;9\&quot; for FRF - \&quot;10\&quot; for ITL - \&quot;11\&quot; for DKK - \&quot;12\&quot; for NOK - \&quot;13\&quot; for FIM - \&quot;14\&quot; for ZAR - \&quot;15\&quot; for IEP - \&quot;16\&quot; for NLG - \&quot;17\&quot; for EUR - \&quot;18\&quot; for KRW - \&quot;19\&quot; for TWD - \&quot;20\&quot; for SGD - \&quot;21\&quot; for CNY - \&quot;22\&quot; for HKD - \&quot;23\&quot; for NZD - \&quot;24\&quot; for MYR - \&quot;25\&quot; for BRL - \&quot;26\&quot; for PTE - \&quot;28\&quot; for CLP - \&quot;29\&quot; for TRY - \&quot;30\&quot; for ARS - \&quot;31\&quot; for PEN - \&quot;32\&quot; for ILS - \&quot;33\&quot; for CHF - \&quot;34\&quot; for VEF - \&quot;35\&quot; for COP - \&quot;36\&quot; for GTQ - \&quot;37\&quot; for PLN - \&quot;39\&quot; for INR - \&quot;40\&quot; for THB - \&quot;41\&quot; for IDR - \&quot;42\&quot; for CZK - \&quot;43\&quot; for RON - \&quot;44\&quot; for HUF - \&quot;45\&quot; for RUB - \&quot;46\&quot; for AED - \&quot;47\&quot; for BGN - \&quot;48\&quot; for HRK - \&quot;49\&quot; for MXN - \&quot;50\&quot; for NGN - \&quot;51\&quot; for EGP  | [optional] 
**default_creative_size_id** | **str** | Default placement dimensions for this account. | [optional] 
**description** | **str** | Description of this account. | [optional] 
**id** | **str** | ID of this account. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#account\&quot;. | [optional] 
**locale** | **str** | Locale of this account. Acceptable values are: - \&quot;cs\&quot; (Czech) - \&quot;de\&quot; (German) - \&quot;en\&quot; (English) - \&quot;en-GB\&quot; (English United Kingdom) - \&quot;es\&quot; (Spanish) - \&quot;fr\&quot; (French) - \&quot;it\&quot; (Italian) - \&quot;ja\&quot; (Japanese) - \&quot;ko\&quot; (Korean) - \&quot;pl\&quot; (Polish) - \&quot;pt-BR\&quot; (Portuguese Brazil) - \&quot;ru\&quot; (Russian) - \&quot;sv\&quot; (Swedish) - \&quot;tr\&quot; (Turkish) - \&quot;zh-CN\&quot; (Chinese Simplified) - \&quot;zh-TW\&quot; (Chinese Traditional)  | [optional] 
**maximum_image_size** | **str** | Maximum image size allowed for this account, in kilobytes. Value must be greater than or equal to 1. | [optional] 
**name** | **str** | Name of this account. This is a required field, and must be less than 128 characters long and be globally unique. | [optional] 
**nielsen_ocr_enabled** | **bool** | Whether campaigns created in this account will be enabled for Nielsen OCR reach ratings by default. | [optional] 
**reports_configuration** | [**ReportsConfiguration**](ReportsConfiguration.md) |  | [optional] 
**share_reports_with_twitter** | **bool** | Share Path to Conversion reports with Twitter. | [optional] 
**teaser_size_limit** | **str** | File size limit in kilobytes of Rich Media teaser creatives. Acceptable values are 1 to 10240, inclusive. | [optional] 

## Example

```python
from openapi_client.models.account import Account

# TODO update the JSON string below
json = "{}"
# create an instance of Account from a JSON string
account_instance = Account.from_json(json)
# print the JSON string representation of the object
print(Account.to_json())

# convert the object into a dict
account_dict = account_instance.to_dict()
# create an instance of Account from a dict
account_from_dict = Account.from_dict(account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


