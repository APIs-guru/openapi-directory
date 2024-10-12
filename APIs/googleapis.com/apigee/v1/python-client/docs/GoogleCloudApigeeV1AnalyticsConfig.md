# GoogleCloudApigeeV1AnalyticsConfig

Configuration for the Analytics add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether the Analytics add-on is enabled. | [optional] 
**expire_time_millis** | **str** | Output only. Time at which the Analytics add-on expires in milliseconds since epoch. If unspecified, the add-on will never expire. | [optional] [readonly] 
**state** | **str** | Output only. The state of the Analytics add-on. | [optional] [readonly] 
**update_time** | **str** | Output only. The latest update time. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_analytics_config import GoogleCloudApigeeV1AnalyticsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1AnalyticsConfig from a JSON string
google_cloud_apigee_v1_analytics_config_instance = GoogleCloudApigeeV1AnalyticsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1AnalyticsConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_analytics_config_dict = google_cloud_apigee_v1_analytics_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1AnalyticsConfig from a dict
google_cloud_apigee_v1_analytics_config_from_dict = GoogleCloudApigeeV1AnalyticsConfig.from_dict(google_cloud_apigee_v1_analytics_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


