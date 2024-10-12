# JobListJsonObject

The List Job operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | [**JobDetailRootJsonObject**](JobDetailRootJsonObject.md) |  | [optional] 
**id** | **str** | The Id of the job. | [optional] 

## Example

```python
from openapi_client.models.job_list_json_object import JobListJsonObject

# TODO update the JSON string below
json = "{}"
# create an instance of JobListJsonObject from a JSON string
job_list_json_object_instance = JobListJsonObject.from_json(json)
# print the JSON string representation of the object
print(JobListJsonObject.to_json())

# convert the object into a dict
job_list_json_object_dict = job_list_json_object_instance.to_dict()
# create an instance of JobListJsonObject from a dict
job_list_json_object_from_dict = JobListJsonObject.from_dict(job_list_json_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


