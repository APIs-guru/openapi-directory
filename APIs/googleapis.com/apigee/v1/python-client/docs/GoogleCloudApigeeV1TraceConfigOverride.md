# GoogleCloudApigeeV1TraceConfigOverride

A representation of a configuration override.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_proxy** | **str** | ID of the API proxy that will have its trace configuration overridden. | [optional] 
**name** | **str** | ID of the trace configuration override specified as a system-generated UUID. | [optional] 
**sampling_config** | [**GoogleCloudApigeeV1TraceSamplingConfig**](GoogleCloudApigeeV1TraceSamplingConfig.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_trace_config_override import GoogleCloudApigeeV1TraceConfigOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TraceConfigOverride from a JSON string
google_cloud_apigee_v1_trace_config_override_instance = GoogleCloudApigeeV1TraceConfigOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TraceConfigOverride.to_json())

# convert the object into a dict
google_cloud_apigee_v1_trace_config_override_dict = google_cloud_apigee_v1_trace_config_override_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TraceConfigOverride from a dict
google_cloud_apigee_v1_trace_config_override_from_dict = GoogleCloudApigeeV1TraceConfigOverride.from_dict(google_cloud_apigee_v1_trace_config_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


