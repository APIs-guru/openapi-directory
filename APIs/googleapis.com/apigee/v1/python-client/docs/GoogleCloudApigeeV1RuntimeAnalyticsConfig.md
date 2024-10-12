# GoogleCloudApigeeV1RuntimeAnalyticsConfig

Runtime configuration for the Analytics add-on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_pipeline_enabled** | **bool** | If Runtime should send billing data to AX or not. | [optional] 
**enabled** | **bool** | If the Analytics is enabled or not. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_runtime_analytics_config import GoogleCloudApigeeV1RuntimeAnalyticsConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RuntimeAnalyticsConfig from a JSON string
google_cloud_apigee_v1_runtime_analytics_config_instance = GoogleCloudApigeeV1RuntimeAnalyticsConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RuntimeAnalyticsConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_runtime_analytics_config_dict = google_cloud_apigee_v1_runtime_analytics_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RuntimeAnalyticsConfig from a dict
google_cloud_apigee_v1_runtime_analytics_config_from_dict = GoogleCloudApigeeV1RuntimeAnalyticsConfig.from_dict(google_cloud_apigee_v1_runtime_analytics_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


