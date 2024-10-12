# GoogleCloudApigeeV1RuntimeTraceConfigOverride

NEXT ID: 7 Trace configuration override for a specific API proxy in an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_proxy** | **str** | Name of the API proxy that will have its trace configuration overridden following format: &#x60;organizations/{org}/apis/{api}&#x60; | [optional] 
**name** | **str** | Name of the trace config override in the following format: &#x60;organizations/{org}/environment/{env}/traceConfig/overrides/{override}&#x60; | [optional] 
**revision_create_time** | **str** | The timestamp that the revision was created or updated. | [optional] 
**revision_id** | **str** | Revision number which can be used by the runtime to detect if the trace config override has changed between two versions. | [optional] 
**sampling_config** | [**GoogleCloudApigeeV1RuntimeTraceSamplingConfig**](GoogleCloudApigeeV1RuntimeTraceSamplingConfig.md) |  | [optional] 
**uid** | **str** | Unique ID for the configuration override. The ID will only change if the override is deleted and recreated. Corresponds to name&#39;s \&quot;override\&quot; field. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_runtime_trace_config_override import GoogleCloudApigeeV1RuntimeTraceConfigOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1RuntimeTraceConfigOverride from a JSON string
google_cloud_apigee_v1_runtime_trace_config_override_instance = GoogleCloudApigeeV1RuntimeTraceConfigOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1RuntimeTraceConfigOverride.to_json())

# convert the object into a dict
google_cloud_apigee_v1_runtime_trace_config_override_dict = google_cloud_apigee_v1_runtime_trace_config_override_instance.to_dict()
# create an instance of GoogleCloudApigeeV1RuntimeTraceConfigOverride from a dict
google_cloud_apigee_v1_runtime_trace_config_override_from_dict = GoogleCloudApigeeV1RuntimeTraceConfigOverride.from_dict(google_cloud_apigee_v1_runtime_trace_config_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


