# GoogleCloudApigeeV1TraceConfig

TraceConfig defines the configurations in an environment of distributed trace.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Required. Endpoint of the exporter. | [optional] 
**exporter** | **str** | Required. Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters. | [optional] 
**sampling_config** | [**GoogleCloudApigeeV1TraceSamplingConfig**](GoogleCloudApigeeV1TraceSamplingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_trace_config import GoogleCloudApigeeV1TraceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TraceConfig from a JSON string
google_cloud_apigee_v1_trace_config_instance = GoogleCloudApigeeV1TraceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TraceConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_trace_config_dict = google_cloud_apigee_v1_trace_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TraceConfig from a dict
google_cloud_apigee_v1_trace_config_from_dict = GoogleCloudApigeeV1TraceConfig.from_dict(google_cloud_apigee_v1_trace_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


