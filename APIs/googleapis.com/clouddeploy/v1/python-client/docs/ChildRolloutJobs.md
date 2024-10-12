# ChildRolloutJobs

ChildRollouts job composition

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advance_rollout_jobs** | [**List[Job]**](Job.md) | Output only. List of AdvanceChildRolloutJobs | [optional] [readonly] 
**create_rollout_jobs** | [**List[Job]**](Job.md) | Output only. List of CreateChildRolloutJobs | [optional] [readonly] 

## Example

```python
from openapi_client.models.child_rollout_jobs import ChildRolloutJobs

# TODO update the JSON string below
json = "{}"
# create an instance of ChildRolloutJobs from a JSON string
child_rollout_jobs_instance = ChildRolloutJobs.from_json(json)
# print the JSON string representation of the object
print(ChildRolloutJobs.to_json())

# convert the object into a dict
child_rollout_jobs_dict = child_rollout_jobs_instance.to_dict()
# create an instance of ChildRolloutJobs from a dict
child_rollout_jobs_from_dict = ChildRolloutJobs.from_dict(child_rollout_jobs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


