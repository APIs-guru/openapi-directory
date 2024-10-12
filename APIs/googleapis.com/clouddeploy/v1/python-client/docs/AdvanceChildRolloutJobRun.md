# AdvanceChildRolloutJobRun

AdvanceChildRolloutJobRun contains information specific to a advanceChildRollout `JobRun`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rollout** | **str** | Output only. Name of the &#x60;ChildRollout&#x60;. Format is &#x60;projects/{project}/locations/{location}/deliveryPipelines/{deliveryPipeline}/releases/{release}/rollouts/a-z{0,62}&#x60;. | [optional] [readonly] 
**rollout_phase_id** | **str** | Output only. the ID of the ChildRollout&#39;s Phase. | [optional] [readonly] 

## Example

```python
from openapi_client.models.advance_child_rollout_job_run import AdvanceChildRolloutJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of AdvanceChildRolloutJobRun from a JSON string
advance_child_rollout_job_run_instance = AdvanceChildRolloutJobRun.from_json(json)
# print the JSON string representation of the object
print(AdvanceChildRolloutJobRun.to_json())

# convert the object into a dict
advance_child_rollout_job_run_dict = advance_child_rollout_job_run_instance.to_dict()
# create an instance of AdvanceChildRolloutJobRun from a dict
advance_child_rollout_job_run_from_dict = AdvanceChildRolloutJobRun.from_dict(advance_child_rollout_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


