# PredeployJob

A predeploy Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | **List[str]** | Output only. The custom actions that the predeploy Job executes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.predeploy_job import PredeployJob

# TODO update the JSON string below
json = "{}"
# create an instance of PredeployJob from a JSON string
predeploy_job_instance = PredeployJob.from_json(json)
# print the JSON string representation of the object
print(PredeployJob.to_json())

# convert the object into a dict
predeploy_job_dict = predeploy_job_instance.to_dict()
# create an instance of PredeployJob from a dict
predeploy_job_from_dict = PredeployJob.from_dict(predeploy_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


