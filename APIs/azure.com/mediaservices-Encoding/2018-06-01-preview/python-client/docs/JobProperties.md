# JobProperties

Properties of the Job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_data** | **Dict[str, str]** | Customer provided correlation data that will be returned in Job completed events. | [optional] 
**created** | **datetime** | The UTC date and time when the Job was created, in &#39;YYYY-MM-DDThh:mm:ssZ&#39; format. | [optional] [readonly] 
**description** | **str** | Optional customer supplied description of the Job. | [optional] 
**input** | [**JobInput**](JobInput.md) |  | 
**last_modified** | **datetime** | The UTC date and time when the Job was last updated, in &#39;YYYY-MM-DDThh:mm:ssZ&#39; format. | [optional] [readonly] 
**outputs** | [**List[JobOutput]**](JobOutput.md) | The outputs for the Job. | 
**priority** | **str** | Priority with which the job should be processed. Higher priority jobs are processed before lower priority jobs. If not set, the default is normal. | [optional] 
**state** | **str** | The current state of the job. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_properties import JobProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JobProperties from a JSON string
job_properties_instance = JobProperties.from_json(json)
# print the JSON string representation of the object
print(JobProperties.to_json())

# convert the object into a dict
job_properties_dict = job_properties_instance.to_dict()
# create an instance of JobProperties from a dict
job_properties_from_dict = JobProperties.from_dict(job_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


