# JobResource

The Data Lake Analytics job resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | the name of the resource. | [optional] 
**var_resource_path** | **str** | the path to the resource. | [optional] 
**type** | **str** | the job resource type. | [optional] 

## Example

```python
from openapi_client.models.job_resource import JobResource

# TODO update the JSON string below
json = "{}"
# create an instance of JobResource from a JSON string
job_resource_instance = JobResource.from_json(json)
# print the JSON string representation of the object
print(JobResource.to_json())

# convert the object into a dict
job_resource_dict = job_resource_instance.to_dict()
# create an instance of JobResource from a dict
job_resource_from_dict = JobResource.from_dict(job_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


