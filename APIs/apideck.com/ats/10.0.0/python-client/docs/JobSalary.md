# JobSalary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | [**Currency**](Currency.md) |  | [optional] 
**interval** | **str** |  | [optional] 
**max** | **int** | Maximum salary payable for the job role. | [optional] 
**min** | **int** | Minimum salary payable for the job role. | [optional] 

## Example

```python
from openapi_client.models.job_salary import JobSalary

# TODO update the JSON string below
json = "{}"
# create an instance of JobSalary from a JSON string
job_salary_instance = JobSalary.from_json(json)
# print the JSON string representation of the object
print(JobSalary.to_json())

# convert the object into a dict
job_salary_dict = job_salary_instance.to_dict()
# create an instance of JobSalary from a dict
job_salary_from_dict = JobSalary.from_dict(job_salary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


