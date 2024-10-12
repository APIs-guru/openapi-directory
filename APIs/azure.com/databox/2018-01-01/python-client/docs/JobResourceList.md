# JobResourceList

Job Resource Collection

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for the next set of job resources. | [optional] 
**value** | [**List[JobResource]**](JobResource.md) | List of job resources. | [optional] 

## Example

```python
from openapi_client.models.job_resource_list import JobResourceList

# TODO update the JSON string below
json = "{}"
# create an instance of JobResourceList from a JSON string
job_resource_list_instance = JobResourceList.from_json(json)
# print the JSON string representation of the object
print(JobResourceList.to_json())

# convert the object into a dict
job_resource_list_dict = job_resource_list_instance.to_dict()
# create an instance of JobResourceList from a dict
job_resource_list_from_dict = JobResourceList.from_dict(job_resource_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


