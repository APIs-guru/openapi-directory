# GoogleAnalyticsAdminV1alphaAccountSummary

A virtual resource representing an overview of an account and all its child GA4 properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Resource name of account referred to by this account summary Format: accounts/{account_id} Example: \&quot;accounts/1000\&quot; | [optional] 
**display_name** | **str** | Display name for the account referred to in this account summary. | [optional] 
**name** | **str** | Resource name for this account summary. Format: accountSummaries/{account_id} Example: \&quot;accountSummaries/1000\&quot; | [optional] 
**property_summaries** | [**List[GoogleAnalyticsAdminV1alphaPropertySummary]**](GoogleAnalyticsAdminV1alphaPropertySummary.md) | List of summaries for child accounts of this account. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_account_summary import GoogleAnalyticsAdminV1alphaAccountSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaAccountSummary from a JSON string
google_analytics_admin_v1alpha_account_summary_instance = GoogleAnalyticsAdminV1alphaAccountSummary.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaAccountSummary.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_account_summary_dict = google_analytics_admin_v1alpha_account_summary_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaAccountSummary from a dict
google_analytics_admin_v1alpha_account_summary_from_dict = GoogleAnalyticsAdminV1alphaAccountSummary.from_dict(google_analytics_admin_v1alpha_account_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


