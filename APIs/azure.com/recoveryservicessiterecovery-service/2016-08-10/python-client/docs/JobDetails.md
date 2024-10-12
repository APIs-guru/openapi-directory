# JobDetails

Job details based on specific job type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**affected_object_details** | **Dict[str, str]** | The affected object properties like source server, source cloud, target server, target cloud etc. based on the workflow object details. | [optional] 
**instance_type** | **str** | Gets the type of job details (see JobDetailsTypes enum for possible values). | [optional] [readonly] 

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


