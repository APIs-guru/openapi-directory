# GoogleCloudApigeeV1StatsEnvironmentStats

Encapsulates the environment wrapper: ``` \"environments\": [ { \"metrics\": [ { \"name\": \"sum(message_count)\", \"values\": [ \"2.52056245E8\" ] } ], \"name\": \"prod\" } ]```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[GoogleCloudApigeeV1DimensionMetric]**](GoogleCloudApigeeV1DimensionMetric.md) | List of metrics grouped under dimensions. | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1Metric]**](GoogleCloudApigeeV1Metric.md) | In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only top-level metrics is provided. If dimensions are included, then there will be a top-level dimensions field under environments which will contain metrics values and the dimension name. Example: &#x60;&#x60;&#x60; \&quot;environments\&quot;: [ { \&quot;dimensions\&quot;: [ { \&quot;metrics\&quot;: [ { \&quot;name\&quot;: \&quot;sum(message_count)\&quot;, \&quot;values\&quot;: [ \&quot;2.14049521E8\&quot; ] } ], \&quot;name\&quot;: \&quot;nit_proxy\&quot; } ], \&quot;name\&quot;: \&quot;prod\&quot; } ]&#x60;&#x60;&#x60; or &#x60;&#x60;&#x60;\&quot;environments\&quot;: [ { \&quot;metrics\&quot;: [ { \&quot;name\&quot;: \&quot;sum(message_count)\&quot;, \&quot;values\&quot;: [ \&quot;2.19026331E8\&quot; ] } ], \&quot;name\&quot;: \&quot;prod\&quot; } ]&#x60;&#x60;&#x60; List of metric values. | [optional] 
**name** | **str** | Name of the environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_stats_environment_stats import GoogleCloudApigeeV1StatsEnvironmentStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1StatsEnvironmentStats from a JSON string
google_cloud_apigee_v1_stats_environment_stats_instance = GoogleCloudApigeeV1StatsEnvironmentStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1StatsEnvironmentStats.to_json())

# convert the object into a dict
google_cloud_apigee_v1_stats_environment_stats_dict = google_cloud_apigee_v1_stats_environment_stats_instance.to_dict()
# create an instance of GoogleCloudApigeeV1StatsEnvironmentStats from a dict
google_cloud_apigee_v1_stats_environment_stats_from_dict = GoogleCloudApigeeV1StatsEnvironmentStats.from_dict(google_cloud_apigee_v1_stats_environment_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


