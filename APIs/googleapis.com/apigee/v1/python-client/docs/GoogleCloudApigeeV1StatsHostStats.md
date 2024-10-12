# GoogleCloudApigeeV1StatsHostStats

Encapsulates the hostname wrapper: ``` \"hosts\": [ { \"metrics\": [ { \"name\": \"sum(message_count)\", \"values\": [ \"2.52056245E8\" ] } ], \"name\": \"example.com\" } ]```

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**List[GoogleCloudApigeeV1DimensionMetric]**](GoogleCloudApigeeV1DimensionMetric.md) | List of metrics grouped under dimensions. | [optional] 
**metrics** | [**List[GoogleCloudApigeeV1Metric]**](GoogleCloudApigeeV1Metric.md) | In the final response, only one of the following fields will be present based on the dimensions provided. If no dimensions are provided, then only the top-level metrics are provided. If dimensions are included, then there will be a top-level dimensions field under hostnames which will contain metrics values and the dimension name. Example: &#x60;&#x60;&#x60; \&quot;hosts\&quot;: [ { \&quot;dimensions\&quot;: [ { \&quot;metrics\&quot;: [ { \&quot;name\&quot;: \&quot;sum(message_count)\&quot;, \&quot;values\&quot;: [ \&quot;2.14049521E8\&quot; ] } ], \&quot;name\&quot;: \&quot;nit_proxy\&quot; } ], \&quot;name\&quot;: \&quot;example.com\&quot; } ]&#x60;&#x60;&#x60; OR &#x60;&#x60;&#x60;\&quot;hosts\&quot;: [ { \&quot;metrics\&quot;: [ { \&quot;name\&quot;: \&quot;sum(message_count)\&quot;, \&quot;values\&quot;: [ \&quot;2.19026331E8\&quot; ] } ], \&quot;name\&quot;: \&quot;example.com\&quot; } ]&#x60;&#x60;&#x60; List of metric values. | [optional] 
**name** | **str** | Hostname used in query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_stats_host_stats import GoogleCloudApigeeV1StatsHostStats

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1StatsHostStats from a JSON string
google_cloud_apigee_v1_stats_host_stats_instance = GoogleCloudApigeeV1StatsHostStats.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1StatsHostStats.to_json())

# convert the object into a dict
google_cloud_apigee_v1_stats_host_stats_dict = google_cloud_apigee_v1_stats_host_stats_instance.to_dict()
# create an instance of GoogleCloudApigeeV1StatsHostStats from a dict
google_cloud_apigee_v1_stats_host_stats_from_dict = GoogleCloudApigeeV1StatsHostStats.from_dict(google_cloud_apigee_v1_stats_host_stats_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


