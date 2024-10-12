# Job


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addresses** | [**List[Address]**](Address.md) |  | [optional] 
**available_to_employees** | **bool** | Specifies whether an employee of the organization can apply for the job. | [optional] 
**blocks** | [**List[JobBlocksInner]**](JobBlocksInner.md) |  | [optional] 
**branch** | [**Branch**](Branch.md) |  | [optional] 
**closing** | **str** |  | [optional] 
**closing_date** | **date** |  | [optional] 
**closing_html** | **str** | The closing section of the job description in HTML format | [optional] 
**code** | **str** | The code of the job. | [optional] 
**confidential** | **bool** |  | [optional] 
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**custom_fields** | [**List[CustomField]**](CustomField.md) |  | [optional] 
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**deleted** | **bool** | Flag to indicate if the object is deleted. | [optional] 
**department** | [**Department**](Department.md) |  | [optional] 
**description** | **str** | A description of the object. | [optional] 
**description_html** | **str** | The job description in HTML format | [optional] 
**employment_terms** | **str** |  | [optional] 
**experience** | **str** | Level of experience required for the job role. | [optional] 
**followers** | **List[str]** |  | [optional] 
**hiring_managers** | **List[str]** |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**job_portal_url** | **str** | URL of the job portal | [optional] 
**language** | **str** | language code according to ISO 639-1. For the United States - EN | [optional] 
**links** | [**List[JobLinksInner]**](JobLinksInner.md) |  | [optional] 
**location** | **str** | Specifies the location for the job posting. | [optional] 
**owner_id** | **str** |  | [optional] 
**published_at** | **datetime** |  | [optional] [readonly] 
**record_url** | **str** |  | [optional] 
**recruiters** | **List[str]** | The recruiter is generally someone who is tasked to help the hiring manager find and screen qualified applicant | [optional] 
**remote** | **bool** | Specifies whether the posting is for a remote job. | [optional] 
**requisition_id** | **str** | A job&#39;s Requisition ID (Req ID) allows your organization to identify and track a job based on alphanumeric naming conventions unique to your company&#39;s internal processes. | [optional] 
**salary** | [**JobSalary**](JobSalary.md) |  | [optional] 
**sequence** | **int** | Sequence in relation to other jobs. | [optional] 
**slug** | **str** |  | [optional] 
**status** | [**JobStatus**](JobStatus.md) |  | [optional] 
**tags** | **List[str]** |  | [optional] 
**title** | **str** | The job title of the person. | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 
**url** | **str** | URL of the job description | [optional] 
**visibility** | **str** | The visibility of the job | [optional] 

## Example

```python
from openapi_client.models.job import Job

# TODO update the JSON string below
json = "{}"
# create an instance of Job from a JSON string
job_instance = Job.from_json(json)
# print the JSON string representation of the object
print(Job.to_json())

# convert the object into a dict
job_dict = job_instance.to_dict()
# create an instance of Job from a dict
job_from_dict = Job.from_dict(job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


