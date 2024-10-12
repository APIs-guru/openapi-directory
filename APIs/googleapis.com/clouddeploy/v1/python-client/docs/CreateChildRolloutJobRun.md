# CreateChildRolloutJobRun

CreateChildRolloutJobRun contains information specific to a createChildRollout `JobRun`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollout** | **str** | Output only. Name of the &#x60;ChildRollout&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}&#x60;. | [optional] [readonly] 
**rollout_phase_id** | **str** | Output only. The ID of the childRollout Phase initiated by this JobRun. | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_child_rollout_job_run import CreateChildRolloutJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of CreateChildRolloutJobRun from a JSON string
create_child_rollout_job_run_instance = CreateChildRolloutJobRun.from_json(json)
# print the JSON string representation of the object
print(CreateChildRolloutJobRun.to_json())

# convert the object into a dict
create_child_rollout_job_run_dict = create_child_rollout_job_run_instance.to_dict()
# create an instance of CreateChildRolloutJobRun from a dict
create_child_rollout_job_run_from_dict = CreateChildRolloutJobRun.from_dict(create_child_rollout_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


