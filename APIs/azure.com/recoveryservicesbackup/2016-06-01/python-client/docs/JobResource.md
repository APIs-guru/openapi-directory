# JobResource

Defines the workload-agnostic properties for a job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Job**](Job.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource ID represents the complete path to the resource. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] 

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


