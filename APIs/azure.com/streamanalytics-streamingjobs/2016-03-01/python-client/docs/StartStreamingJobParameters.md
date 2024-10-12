# StartStreamingJobParameters

Parameters supplied to the Start Streaming Job operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_start_mode** | [**OutputStartMode**](OutputStartMode.md) |  | [optional] 
**output_start_time** | **datetime** | Value is either an ISO-8601 formatted time stamp that indicates the starting point of the output event stream, or null to indicate that the output event stream will start whenever the streaming job is started. This property must have a value if outputStartMode is set to CustomTime. | [optional] 

## Example

```python
from openapi_client.models.start_streaming_job_parameters import StartStreamingJobParameters

# TODO update the JSON string below
json = "{}"
# create an instance of StartStreamingJobParameters from a JSON string
start_streaming_job_parameters_instance = StartStreamingJobParameters.from_json(json)
# print the JSON string representation of the object
print(StartStreamingJobParameters.to_json())

# convert the object into a dict
start_streaming_job_parameters_dict = start_streaming_job_parameters_instance.to_dict()
# create an instance of StartStreamingJobParameters from a dict
start_streaming_job_parameters_from_dict = StartStreamingJobParameters.from_dict(start_streaming_job_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


