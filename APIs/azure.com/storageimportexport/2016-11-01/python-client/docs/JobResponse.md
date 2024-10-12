# JobResponse

Contains the job information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Specifies the resource identifier of the job. | [optional] [readonly] 
**location** | **str** | Specifies the Azure location where the job is created. | [optional] 
**name** | **str** | Specifies the name of the job. | [optional] [readonly] 
**properties** | [**JobDetails**](JobDetails.md) |  | [optional] 
**tags** | **object** | Specifies the tags that are assigned to the job. | [optional] 
**type** | **str** | Specifies the type of the job resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_response import JobResponse

# TODO update the JSON string below
json = "{}"
# create an instance of JobResponse from a JSON string
job_response_instance = JobResponse.from_json(json)
# print the JSON string representation of the object
print(JobResponse.to_json())

# convert the object into a dict
job_response_dict = job_response_instance.to_dict()
# create an instance of JobResponse from a dict
job_response_from_dict = JobResponse.from_dict(job_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


