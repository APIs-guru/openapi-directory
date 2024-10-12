# JobDataPath

A Data Lake Analytics U-SQL job data path item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**command** | **str** | Gets the command that this job data relates to. | [optional] [readonly] 
**job_id** | **str** | Gets the id of the job this data is for. | [optional] [readonly] 
**paths** | **List[str]** | Gets the list of paths to all of the job data. | [optional] [readonly] 

## Example

```python
from openapi_client.models.job_data_path import JobDataPath

# TODO update the JSON string below
json = "{}"
# create an instance of JobDataPath from a JSON string
job_data_path_instance = JobDataPath.from_json(json)
# print the JSON string representation of the object
print(JobDataPath.to_json())

# convert the object into a dict
job_data_path_dict = job_data_path_instance.to_dict()
# create an instance of JobDataPath from a dict
job_data_path_from_dict = JobDataPath.from_dict(job_data_path_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


