# RuntimeUpdatableParams

Additional job parameters that can only be updated during runtime using the projects.jobs.update method. These fields have no effect when specified during job creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_num_workers** | **int** | The maximum number of workers to cap autoscaling at. This field is currently only supported for Streaming Engine jobs. | [optional] 
**min_num_workers** | **int** | The minimum number of workers to scale down to. This field is currently only supported for Streaming Engine jobs. | [optional] 
**worker_utilization_hint** | **float** | Target worker utilization, compared against the aggregate utilization of the worker pool by autoscaler, to determine upscaling and downscaling when absent other constraints such as backlog. | [optional] 

## Example

```python
from openapi_client.models.runtime_updatable_params import RuntimeUpdatableParams

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeUpdatableParams from a JSON string
runtime_updatable_params_instance = RuntimeUpdatableParams.from_json(json)
# print the JSON string representation of the object
print(RuntimeUpdatableParams.to_json())

# convert the object into a dict
runtime_updatable_params_dict = runtime_updatable_params_instance.to_dict()
# create an instance of RuntimeUpdatableParams from a dict
runtime_updatable_params_from_dict = RuntimeUpdatableParams.from_dict(runtime_updatable_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


