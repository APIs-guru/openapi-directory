# JobPipelineInformationListResult

List of job pipeline information items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | the link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[JobPipelineInformation]**](JobPipelineInformation.md) | the list of job pipeline information items. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_pipeline_information_list_result import JobPipelineInformationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of JobPipelineInformationListResult from a JSON string
job_pipeline_information_list_result_instance = JobPipelineInformationListResult.from_json(json)
# print the JSON string representation of the object
print(JobPipelineInformationListResult.to_json())

# convert the object into a dict
job_pipeline_information_list_result_dict = job_pipeline_information_list_result_instance.to_dict()
# create an instance of JobPipelineInformationListResult from a dict
job_pipeline_information_list_result_from_dict = JobPipelineInformationListResult.from_dict(job_pipeline_information_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


