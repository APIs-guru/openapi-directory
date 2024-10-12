# PredeployJobRun

PredeployJobRun contains information specific to a predeploy `JobRun`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | **str** | Output only. The resource name of the Cloud Build &#x60;Build&#x60; object that is used to execute the custom actions associated with the predeploy Job. Format is &#x60;projects/{project}/locations/{location}/builds/{build}&#x60;. | [optional] [readonly] 
**failure_cause** | **str** | Output only. The reason the predeploy failed. This will always be unspecified while the predeploy is in progress or if it succeeded. | [optional] [readonly] 
**failure_message** | **str** | Output only. Additional information about the predeploy failure, if available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.predeploy_job_run import PredeployJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of PredeployJobRun from a JSON string
predeploy_job_run_instance = PredeployJobRun.from_json(json)
# print the JSON string representation of the object
print(PredeployJobRun.to_json())

# convert the object into a dict
predeploy_job_run_dict = predeploy_job_run_instance.to_dict()
# create an instance of PredeployJobRun from a dict
predeploy_job_run_from_dict = PredeployJobRun.from_dict(predeploy_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


