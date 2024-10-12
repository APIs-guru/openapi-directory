# GoogleCloudApigeeV1RuntimeTraceConfig

NEXT ID: 8 RuntimeTraceConfig defines the configurations for distributed trace in an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Endpoint of the exporter. | [optional] 
**exporter** | **str** | Exporter that is used to view the distributed trace captured using OpenCensus. An exporter sends traces to any backend that is capable of consuming them. Recorded spans can be exported by registered exporters. | [optional] 
**name** | **str** | Name of the trace config in the following format: &#x60;organizations/{org}/environment/{env}/traceConfig&#x60; | [optional] 
**overrides** | [**List[GoogleCloudApigeeV1RuntimeTraceConfigOverride]**](GoogleCloudApigeeV1RuntimeTraceConfigOverride.md) | List of trace configuration overrides for spicific API proxies. | [optional] 
**revision_create_time** | **str** | The timestamp that the revision was created or updated. | [optional] 
**revision_id** | **str** | Revision number which can be used by the runtime to detect if the trace config has changed between two versions. | [optional] 
**sampling_config** | [**GoogleCloudApigeeV1RuntimeTraceSamplingConfig**](GoogleCloudApigeeV1RuntimeTraceSamplingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_runtime_trace_config import GoogleCloudApigeeV1RuntimeTraceConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RuntimeTraceConfig from a JSON string
google_cloud_apigee_v1_runtime_trace_config_instance = GoogleCloudApigeeV1RuntimeTraceConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RuntimeTraceConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_runtime_trace_config_dict = google_cloud_apigee_v1_runtime_trace_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RuntimeTraceConfig from a dict
google_cloud_apigee_v1_runtime_trace_config_from_dict = GoogleCloudApigeeV1RuntimeTraceConfig.from_dict(google_cloud_apigee_v1_runtime_trace_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


