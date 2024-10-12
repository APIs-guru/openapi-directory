# GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema

SKAdNetwork conversion value schema of an iOS stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_conversion_values** | **bool** | If enabled, the GA SDK will set conversion values using this schema definition, and schema will be exported to any Google Ads accounts linked to this property. If disabled, the GA SDK will not automatically set conversion values, and also the schema will not be exported to Ads. | [optional] 
**name** | **str** | Output only. Resource name of the schema. This will be child of ONLY an iOS stream, and there can be at most one such child under an iOS stream. Format: properties/{property}/dataStreams/{dataStream}/sKAdNetworkConversionValueSchema | [optional] [readonly] 
**postback_window_one** | [**GoogleAnalyticsAdminV1alphaPostbackWindow**](GoogleAnalyticsAdminV1alphaPostbackWindow.md) |  | [optional] 
**postback_window_three** | [**GoogleAnalyticsAdminV1alphaPostbackWindow**](GoogleAnalyticsAdminV1alphaPostbackWindow.md) |  | [optional] 
**postback_window_two** | [**GoogleAnalyticsAdminV1alphaPostbackWindow**](GoogleAnalyticsAdminV1alphaPostbackWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_skad_network_conversion_value_schema import GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema from a JSON string
google_analytics_admin_v1alpha_skad_network_conversion_value_schema_instance = GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_skad_network_conversion_value_schema_dict = google_analytics_admin_v1alpha_skad_network_conversion_value_schema_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema from a dict
google_analytics_admin_v1alpha_skad_network_conversion_value_schema_from_dict = GoogleAnalyticsAdminV1alphaSKAdNetworkConversionValueSchema.from_dict(google_analytics_admin_v1alpha_skad_network_conversion_value_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


