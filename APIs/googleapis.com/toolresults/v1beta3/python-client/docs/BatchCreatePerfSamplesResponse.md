# BatchCreatePerfSamplesResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**perf_samples** | [**List[PerfSample]**](PerfSample.md) |  | [optional] 

## Example

```python
from openapi_client.models.batch_create_perf_samples_response import BatchCreatePerfSamplesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePerfSamplesResponse from a JSON string
batch_create_perf_samples_response_instance = BatchCreatePerfSamplesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePerfSamplesResponse.to_json())

# convert the object into a dict
batch_create_perf_samples_response_dict = batch_create_perf_samples_response_instance.to_dict()
# create an instance of BatchCreatePerfSamplesResponse from a dict
batch_create_perf_samples_response_from_dict = BatchCreatePerfSamplesResponse.from_dict(batch_create_perf_samples_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


