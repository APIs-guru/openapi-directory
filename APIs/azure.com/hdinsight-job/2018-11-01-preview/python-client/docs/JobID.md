# JobID

The object with the Job ID.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The job number. | [optional] 
**jt_identifier** | **str** | The jobTracker identifier. | [optional] 

## Example

```python
from openapi_client.models.job_id import JobID

# TODO update the JSON string below
json = "{}"
# create an instance of JobID from a JSON string
job_id_instance = JobID.from_json(json)
# print the JSON string representation of the object
print(JobID.to_json())

# convert the object into a dict
job_id_dict = job_id_instance.to_dict()
# create an instance of JobID from a dict
job_id_from_dict = JobID.from_dict(job_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


