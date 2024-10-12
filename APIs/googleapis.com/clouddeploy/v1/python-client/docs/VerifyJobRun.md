# VerifyJobRun

VerifyJobRun contains information specific to a verify `JobRun`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_uri** | **str** | Output only. URI of a directory containing the verify artifacts. This contains the Skaffold event log. | [optional] [readonly] 
**build** | **str** | Output only. The resource name of the Cloud Build &#x60;Build&#x60; object that is used to verify. Format is &#x60;projects/{project}/locations/{location}/builds/{build}&#x60;. | [optional] [readonly] 
**event_log_path** | **str** | Output only. File path of the Skaffold event log relative to the artifact URI. | [optional] [readonly] 
**failure_cause** | **str** | Output only. The reason the verify failed. This will always be unspecified while the verify is in progress or if it succeeded. | [optional] [readonly] 
**failure_message** | **str** | Output only. Additional information about the verify failure, if available. | [optional] [readonly] 

## Example

```python
from openapi_client.models.verify_job_run import VerifyJobRun

# TODO update the JSON string below
json = "{}"
# create an instance of VerifyJobRun from a JSON string
verify_job_run_instance = VerifyJobRun.from_json(json)
# print the JSON string representation of the object
print(VerifyJobRun.to_json())

# convert the object into a dict
verify_job_run_dict = verify_job_run_instance.to_dict()
# create an instance of VerifyJobRun from a dict
verify_job_run_from_dict = VerifyJobRun.from_dict(verify_job_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


