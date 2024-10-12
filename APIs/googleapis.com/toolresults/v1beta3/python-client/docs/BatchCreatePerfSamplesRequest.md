# BatchCreatePerfSamplesRequest

The request must provide up to a maximum of 5000 samples to be created; a larger sample size will cause an INVALID_ARGUMENT error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**perf_samples** | [**List[PerfSample]**](PerfSample.md) | The set of PerfSamples to create should not include existing timestamps | [optional] 

## Example

```python
from openapi_client.models.batch_create_perf_samples_request import BatchCreatePerfSamplesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePerfSamplesRequest from a JSON string
batch_create_perf_samples_request_instance = BatchCreatePerfSamplesRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePerfSamplesRequest.to_json())

# convert the object into a dict
batch_create_perf_samples_request_dict = batch_create_perf_samples_request_instance.to_dict()
# create an instance of BatchCreatePerfSamplesRequest from a dict
batch_create_perf_samples_request_from_dict = BatchCreatePerfSamplesRequest.from_dict(batch_create_perf_samples_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


