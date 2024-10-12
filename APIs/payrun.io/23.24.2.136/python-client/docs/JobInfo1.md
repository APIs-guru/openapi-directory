# JobInfo1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The job infos&#39; created | [optional] 
**employer_key** | **str** | The job infos&#39; employer key | [optional] 
**errors** | [**Errors1**](Errors1.md) |  | [optional] 
**holding_date** | **datetime** | The job infos&#39; holding date | [optional] 
**job_id** | **str** | The job infos&#39; job id | [optional] 
**job_status** | **str** | The job infos&#39; job status | [optional] 
**job_type** | **str** | The job infos&#39; job type | [optional] 
**last_updated** | **datetime** | The job infos&#39; last updated | [optional] 
**progress** | **float** | The job infos&#39; progress | [optional] 

## Example

```python
from openapi_client.models.job_info1 import JobInfo1

# TODO update the JSON string below
json = "{}"
# create an instance of JobInfo1 from a JSON string
job_info1_instance = JobInfo1.from_json(json)
# print the JSON string representation of the object
print(JobInfo1.to_json())

# convert the object into a dict
job_info1_dict = job_info1_instance.to_dict()
# create an instance of JobInfo1 from a dict
job_info1_from_dict = JobInfo1.from_dict(job_info1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


