# JobDetails

Job details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | [**List[ErrorDetails]**](ErrorDetails.md) | Error details for failure. This is optional. | [optional] 
**item_details_link** | **str** | Item Details Link to download files or see details | [optional] 
**job_definition** | [**JobDefinition**](JobDefinition.md) |  | [optional] 
**job_stages** | [**List[JobStages]**](JobStages.md) | List of stages that ran in the job | [optional] 

## Example

```python
from openapi_client.models.job_details import JobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of JobDetails from a JSON string
job_details_instance = JobDetails.from_json(json)
# print the JSON string representation of the object
print(JobDetails.to_json())

# convert the object into a dict
job_details_dict = job_details_instance.to_dict()
# create an instance of JobDetails from a dict
job_details_from_dict = JobDetails.from_dict(job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


