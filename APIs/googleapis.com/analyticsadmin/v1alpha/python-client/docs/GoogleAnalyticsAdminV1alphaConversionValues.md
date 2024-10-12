# GoogleAnalyticsAdminV1alphaConversionValues

Conversion value settings for a postback window for SKAdNetwork conversion value schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coarse_value** | **str** | Required. A coarse grained conversion value. This value is not guaranteed to be unique. | [optional] 
**display_name** | **str** | Display name of the SKAdNetwork conversion value. The max allowed display name length is 50 UTF-16 code units. | [optional] 
**event_mappings** | [**List[GoogleAnalyticsAdminV1alphaEventMapping]**](GoogleAnalyticsAdminV1alphaEventMapping.md) | Event conditions that must be met for this Conversion Value to be achieved. The conditions in this list are ANDed together. It must have minimum of 1 entry and maximum of 3 entries, if the postback window is enabled. | [optional] 
**fine_value** | **int** | The fine-grained conversion value. This is applicable only to the first postback window. Its valid values are [0,63], both inclusive. It must be set for postback window 1, and must not be set for postback window 2 &amp; 3. This value is not guaranteed to be unique. If the configuration for the first postback window is re-used for second or third postback windows this field has no effect. | [optional] 
**lock_enabled** | **bool** | If true, the SDK should lock to this conversion value for the current postback window. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_conversion_values import GoogleAnalyticsAdminV1alphaConversionValues

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaConversionValues from a JSON string
google_analytics_admin_v1alpha_conversion_values_instance = GoogleAnalyticsAdminV1alphaConversionValues.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaConversionValues.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_conversion_values_dict = google_analytics_admin_v1alpha_conversion_values_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaConversionValues from a dict
google_analytics_admin_v1alpha_conversion_values_from_dict = GoogleAnalyticsAdminV1alphaConversionValues.from_dict(google_analytics_admin_v1alpha_conversion_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


