# JobId


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**job_id** | **str** | UUID. Unique id for your job/request with which you can fetch your solution | [optional] 

## Example

```python
from openapi_client.models.job_id import JobId

# TODO update the JSON string below
json = "{}"
# create an instance of JobId from a JSON string
job_id_instance = JobId.from_json(json)
# print the JSON string representation of the object
print(JobId.to_json())

# convert the object into a dict
job_id_dict = job_id_instance.to_dict()
# create an instance of JobId from a dict
job_id_from_dict = JobId.from_dict(job_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


