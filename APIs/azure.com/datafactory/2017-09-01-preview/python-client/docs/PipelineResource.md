# PipelineResource

Pipeline resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | A data factory pipeline. | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.pipeline_resource import PipelineResource

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineResource from a JSON string
pipeline_resource_instance = PipelineResource.from_json(json)
# print the JSON string representation of the object
print(PipelineResource.to_json())

# convert the object into a dict
pipeline_resource_dict = pipeline_resource_instance.to_dict()
# create an instance of PipelineResource from a dict
pipeline_resource_from_dict = PipelineResource.from_dict(pipeline_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


