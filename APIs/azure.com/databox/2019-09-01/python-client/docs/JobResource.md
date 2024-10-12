# JobResource

Job Resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | Id of the object. | [optional] [readonly] 
**name** | **str** | Name of the object. | [optional] [readonly] 
**properties** | [**JobProperties**](JobProperties.md) |  | 
**type** | **str** | Type of the object. | [optional] [readonly] 
**location** | **str** | The location of the resource. This will be one of the supported and registered Azure Regions (e.g. West US, East US, Southeast Asia, etc.). The region of a resource cannot be changed once it is created, but if an identical region is specified on update the request will succeed. | 
**sku** | [**Sku**](Sku.md) |  | 
**tags** | **Dict[str, str]** | The list of key value pairs that describe the resource. These tags can be used in viewing and grouping this resource (across resource groups). | [optional] 

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


