# GoogleAnalyticsAdminV1alphaDataRedactionSettings

Settings for client-side data redaction. Singleton resource under a Web Stream.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email_redaction_enabled** | **bool** | If enabled, any event parameter or user property values that look like an email will be redacted. | [optional] 
**name** | **str** | Output only. Name of this Data Redaction Settings resource. Format: properties/{property_id}/dataStreams/{data_stream}/dataRedactionSettings Example: \&quot;properties/1000/dataStreams/2000/dataRedactionSettings\&quot; | [optional] [readonly] 
**query_parameter_keys** | **List[str]** | The query parameter keys to apply redaction logic to if present in the URL. Query parameter matching is case-insensitive. Must contain at least one element if query_parameter_replacement_enabled is true. Keys cannot contain commas. | [optional] 
**query_parameter_redaction_enabled** | **bool** | Query Parameter redaction removes the key and value portions of a query parameter if it is in the configured set of query parameters. If enabled, URL query replacement logic will be run for the Stream. Any query parameters defined in query_parameter_keys will be redacted. | [optional] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_data_redaction_settings import GoogleAnalyticsAdminV1alphaDataRedactionSettings

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaDataRedactionSettings from a JSON string
google_analytics_admin_v1alpha_data_redaction_settings_instance = GoogleAnalyticsAdminV1alphaDataRedactionSettings.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaDataRedactionSettings.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_data_redaction_settings_dict = google_analytics_admin_v1alpha_data_redaction_settings_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaDataRedactionSettings from a dict
google_analytics_admin_v1alpha_data_redaction_settings_from_dict = GoogleAnalyticsAdminV1alphaDataRedactionSettings.from_dict(google_analytics_admin_v1alpha_data_redaction_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


