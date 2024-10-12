# Profile

JSON template for an Analytics view (profile).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID to which this view (profile) belongs. | [optional] 
**bot_filtering_enabled** | **bool** | Indicates whether bot filtering is enabled for this view (profile). | [optional] 
**child_link** | [**ProfileChildLink**](ProfileChildLink.md) |  | [optional] 
**created** | **datetime** | Time this view (profile) was created. | [optional] [readonly] 
**currency** | **str** | The currency type associated with this view (profile), defaults to USD. The supported values are: USD, JPY, EUR, GBP, AUD, KRW, BRL, CNY, DKK, RUB, SEK, NOK, PLN, TRY, TWD, HKD, THB, IDR, ARS, MXN, VND, PHP, INR, CHF, CAD, CZK, NZD, HUF, BGN, LTL, ZAR, UAH, AED, BOB, CLP, COP, EGP, HRK, ILS, MAD, MYR, PEN, PKR, RON, RSD, SAR, SGD, VEF, LVL | [optional] 
**default_page** | **str** | Default page for this view (profile). | [optional] 
**e_commerce_tracking** | **bool** | Indicates whether ecommerce tracking is enabled for this view (profile). | [optional] 
**enhanced_e_commerce_tracking** | **bool** | Indicates whether enhanced ecommerce tracking is enabled for this view (profile). This property can only be enabled if ecommerce tracking is enabled. | [optional] 
**exclude_query_parameters** | **str** | The query parameters that are excluded from this view (profile). | [optional] 
**id** | **str** | View (Profile) ID. | [optional] 
**internal_web_property_id** | **str** | Internal ID for the web property to which this view (profile) belongs. | [optional] [readonly] 
**kind** | **str** | Resource type for Analytics view (profile). | [optional] [readonly] [default to 'analytics#profile']
**name** | **str** | Name of this view (profile). | [optional] 
**parent_link** | [**ProfileParentLink**](ProfileParentLink.md) |  | [optional] 
**permissions** | [**ProfilePermissions**](ProfilePermissions.md) |  | [optional] 
**self_link** | **str** | Link for this view (profile). | [optional] [readonly] 
**site_search_category_parameters** | **str** | Site search category parameters for this view (profile). | [optional] 
**site_search_query_parameters** | **str** | The site search query parameters for this view (profile). | [optional] 
**starred** | **bool** | Indicates whether this view (profile) is starred or not. | [optional] 
**strip_site_search_category_parameters** | **bool** | Whether or not Analytics will strip search category parameters from the URLs in your reports. | [optional] 
**strip_site_search_query_parameters** | **bool** | Whether or not Analytics will strip search query parameters from the URLs in your reports. | [optional] 
**timezone** | **str** | Time zone for which this view (profile) has been configured. Time zones are identified by strings from the TZ database. | [optional] 
**type** | **str** | View (Profile) type. Supported types: WEB or APP. | [optional] 
**updated** | **datetime** | Time this view (profile) was last modified. | [optional] [readonly] 
**web_property_id** | **str** | Web property ID of the form UA-XXXXX-YY to which this view (profile) belongs. | [optional] [readonly] 
**website_url** | **str** | Website URL for this view (profile). | [optional] 

## Example

```python
from openapi_client.models.profile import Profile

# TODO update the JSON string below
json = "{}"
# create an instance of Profile from a JSON string
profile_instance = Profile.from_json(json)
# print the JSON string representation of the object
print(Profile.to_json())

# convert the object into a dict
profile_dict = profile_instance.to_dict()
# create an instance of Profile from a dict
profile_from_dict = Profile.from_dict(profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


