# GoogleCloudApigeeV1TraceSamplingConfig

TraceSamplingConfig represents the detail settings of distributed tracing. Only the fields that are defined in the distributed trace configuration can be overridden using the distribute trace configuration override APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sampler** | **str** | Sampler of distributed tracing. OFF is the default value. | [optional] 
**sampling_rate** | **float** | Field sampling rate. This value is only applicable when using the PROBABILITY sampler. The supported values are &gt; 0 and &lt;&#x3D; 0.5. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_trace_sampling_config import GoogleCloudApigeeV1TraceSamplingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1TraceSamplingConfig from a JSON string
google_cloud_apigee_v1_trace_sampling_config_instance = GoogleCloudApigeeV1TraceSamplingConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1TraceSamplingConfig.to_json())

# convert the object into a dict
google_cloud_apigee_v1_trace_sampling_config_dict = google_cloud_apigee_v1_trace_sampling_config_instance.to_dict()
# create an instance of GoogleCloudApigeeV1TraceSamplingConfig from a dict
google_cloud_apigee_v1_trace_sampling_config_from_dict = GoogleCloudApigeeV1TraceSamplingConfig.from_dict(google_cloud_apigee_v1_trace_sampling_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


