# JobDerivedInfo

Output only. Derived details about the job posting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_categories** | **List[str]** | Job categories derived from Job.title and Job.description. | [optional] 
**locations** | [**List[Location]**](Location.md) | Structured locations of the job, resolved from Job.addresses. locations are exactly matched to Job.addresses in the same order. | [optional] 

## Example

```python
from openapi_client.models.job_derived_info import JobDerivedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of JobDerivedInfo from a JSON string
job_derived_info_instance = JobDerivedInfo.from_json(json)
# print the JSON string representation of the object
print(JobDerivedInfo.to_json())

# convert the object into a dict
job_derived_info_dict = job_derived_info_instance.to_dict()
# create an instance of JobDerivedInfo from a dict
job_derived_info_from_dict = JobDerivedInfo.from_dict(job_derived_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


