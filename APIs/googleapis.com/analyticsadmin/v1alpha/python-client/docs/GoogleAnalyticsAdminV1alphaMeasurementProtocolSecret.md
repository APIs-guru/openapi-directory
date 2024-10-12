# GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret

A secret value used for sending hits to Measurement Protocol.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Required. Human-readable display name for this secret. | [optional] 
**name** | **str** | Output only. Resource name of this secret. This secret may be a child of any type of stream. Format: properties/{property}/dataStreams/{dataStream}/measurementProtocolSecrets/{measurementProtocolSecret} | [optional] [readonly] 
**secret_value** | **str** | Output only. The measurement protocol secret value. Pass this value to the api_secret field of the Measurement Protocol API when sending hits to this secret&#39;s parent property. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_analytics_admin_v1alpha_measurement_protocol_secret import GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret from a JSON string
google_analytics_admin_v1alpha_measurement_protocol_secret_instance = GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret.from_json(json)
# print the JSON string representation of the object
print(GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret.to_json())

# convert the object into a dict
google_analytics_admin_v1alpha_measurement_protocol_secret_dict = google_analytics_admin_v1alpha_measurement_protocol_secret_instance.to_dict()
# create an instance of GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret from a dict
google_analytics_admin_v1alpha_measurement_protocol_secret_from_dict = GoogleAnalyticsAdminV1alphaMeasurementProtocolSecret.from_dict(google_analytics_admin_v1alpha_measurement_protocol_secret_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


