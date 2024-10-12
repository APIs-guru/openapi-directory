# HrisJob


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_mappings** | **object** | When custom mappings are configured on the resource, the result is included here. | [optional] 
**department** | **str** | Department name | [optional] 
**employee_id** | **str** | Id of the employee | [optional] 
**employment_status** | [**EmploymentStatus**](EmploymentStatus.md) |  | [optional] 
**end_date** | **date** |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**is_primary** | **bool** | Indicates whether this the employee&#39;s primary job. | [optional] 
**location** | [**HrisJobLocation**](HrisJobLocation.md) |  | [optional] 
**start_date** | **date** |  | [optional] 
**title** | **str** | The job title of the person. | [optional] 

## Example

```python
from openapi_client.models.hris_job import HrisJob

# TODO update the JSON string below
json = "{}"
# create an instance of HrisJob from a JSON string
hris_job_instance = HrisJob.from_json(json)
# print the JSON string representation of the object
print(HrisJob.to_json())

# convert the object into a dict
hris_job_dict = hris_job_instance.to_dict()
# create an instance of HrisJob from a dict
hris_job_from_dict = HrisJob.from_dict(hris_job_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


