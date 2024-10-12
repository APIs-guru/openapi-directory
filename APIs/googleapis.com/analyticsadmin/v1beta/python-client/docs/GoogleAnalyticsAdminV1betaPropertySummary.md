# GoogleAnalyticsAdminV1betaPropertySummary

A virtual resource representing metadata for a GA4 property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name for the property referred to in this property summary. | [optional] 
**parent** | **str** | Resource name of this property&#39;s logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: \&quot;accounts/100\&quot;, \&quot;properties/200\&quot; | [optional] 
**var_property** | **str** | Resource name of property referred to by this property summary Format: properties/{property_id} Example: \&quot;properties/1000\&quot; | [optional] 
**property_type** | **str** | The property&#39;s property type. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1beta_property_summary import GoogleAnalyticsAdminV1betaPropertySummary

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1betaPropertySummary from a JSON string
google_analytics_admin_v1beta_property_summary_instance = GoogleAnalyticsAdminV1betaPropertySummary.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1betaPropertySummary.to_json())

# convert the object into a dict
google_analytics_admin_v1beta_property_summary_dict = google_analytics_admin_v1beta_property_summary_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1betaPropertySummary from a dict
google_analytics_admin_v1beta_property_summary_from_dict = GoogleAnalyticsAdminV1betaPropertySummary.from_dict(google_analytics_admin_v1beta_property_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


