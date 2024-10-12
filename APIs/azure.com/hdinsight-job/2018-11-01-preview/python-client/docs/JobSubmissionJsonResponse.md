# JobSubmissionJsonResponse

The job submission json response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The Id of the created job. | [optional] 

## Example

```python
from openapi_client.models.job_submission_json_response import JobSubmissionJsonResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobSubmissionJsonResponse from a JSON string
job_submission_json_response_instance = JobSubmissionJsonResponse.from_json(json)
# print the JSON string representation of the object
print(JobSubmissionJsonResponse.to_json())

# convert the object into a dict
job_submission_json_response_dict = job_submission_json_response_instance.to_dict()
# create an instance of JobSubmissionJsonResponse from a dict
job_submission_json_response_from_dict = JobSubmissionJsonResponse.from_dict(job_submission_json_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


