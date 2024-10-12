# GoogleAnalyticsAdminV1alphaAccount

A resource message representing a Google Analytics account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Time when this account was originally created. | [optional] [readonly] 
**deleted** | **bool** | Output only. Indicates whether this Account is soft-deleted or not. Deleted accounts are excluded from List results unless specifically requested. | [optional] [readonly] 
**display_name** | **str** | Required. Human-readable display name for this account. | [optional] 
**name** | **str** | Output only. Resource name of this account. Format: accounts/{account} Example: \&quot;accounts/100\&quot; | [optional] [readonly] 
**region_code** | **str** | Country of business. Must be a Unicode CLDR region code. | [optional] 
**update_time** | **str** | Output only. Time when account payload fields were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_account import GoogleAnalyticsAdminV1alphaAccount

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccount from a JSON string
google_analytics_admin_v1alpha_account_instance = GoogleAnalyticsAdminV1alphaAccount.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccount.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_account_dict = google_analytics_admin_v1alpha_account_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccount from a dict
google_analytics_admin_v1alpha_account_from_dict = GoogleAnalyticsAdminV1alphaAccount.from_dict(google_analytics_admin_v1alpha_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


