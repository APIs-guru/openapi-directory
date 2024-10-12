# GoogleAnalyticsAdminV1alphaProperty

A resource message representing a Google Analytics GA4 property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account** | **str** | Immutable. The resource name of the parent account Format: accounts/{account_id} Example: \&quot;accounts/123\&quot; | [optional] 
**create_time** | **str** | Output only. Time when the entity was originally created. | [optional] [readonly] 
**currency_code** | **str** | The currency type used in reports involving monetary values. Format: https://en.wikipedia.org/wiki/ISO_4217 Examples: \&quot;USD\&quot;, \&quot;EUR\&quot;, \&quot;JPY\&quot; | [optional] 
**delete_time** | **str** | Output only. If set, the time at which this property was trashed. If not set, then this property is not currently in the trash can. | [optional] [readonly] 
**display_name** | **str** | Required. Human-readable display name for this property. The max allowed display name length is 100 UTF-16 code units. | [optional] 
**expire_time** | **str** | Output only. If set, the time at which this trashed property will be permanently deleted. If not set, then this property is not currently in the trash can and is not slated to be deleted. | [optional] [readonly] 
**industry_category** | **str** | Industry associated with this property Example: AUTOMOTIVE, FOOD_AND_DRINK | [optional] 
**name** | **str** | Output only. Resource name of this property. Format: properties/{property_id} Example: \&quot;properties/1000\&quot; | [optional] [readonly] 
**parent** | **str** | Immutable. Resource name of this property&#39;s logical parent. Note: The Property-Moving UI can be used to change the parent. Format: accounts/{account}, properties/{property} Example: \&quot;accounts/100\&quot;, \&quot;properties/101\&quot; | [optional] 
**property_type** | **str** | Immutable. The property type for this Property resource. When creating a property, if the type is \&quot;PROPERTY_TYPE_UNSPECIFIED\&quot;, then \&quot;ORDINARY_PROPERTY\&quot; will be implied. | [optional] 
**service_level** | **str** | Output only. The Google Analytics service level that applies to this property. | [optional] [readonly] 
**time_zone** | **str** | Required. Reporting Time Zone, used as the day boundary for reports, regardless of where the data originates. If the time zone honors DST, Analytics will automatically adjust for the changes. NOTE: Changing the time zone only affects data going forward, and is not applied retroactively. Format: https://www.iana.org/time-zones Example: \&quot;America/Los_Angeles\&quot; | [optional] 
**update_time** | **str** | Output only. Time when entity payload fields were last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_property import GoogleAnalyticsAdminV1alphaProperty

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaProperty from a JSON string
google_analytics_admin_v1alpha_property_instance = GoogleAnalyticsAdminV1alphaProperty.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaProperty.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_property_dict = google_analytics_admin_v1alpha_property_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaProperty from a dict
google_analytics_admin_v1alpha_property_from_dict = GoogleAnalyticsAdminV1alphaProperty.from_dict(google_analytics_admin_v1alpha_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


