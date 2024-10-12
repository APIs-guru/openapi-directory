# PipelineProperties

Custom properties of a Pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bootstrap_configuration** | [**BootstrapConfiguration**](BootstrapConfiguration.md) |  | 
**organization** | [**OrganizationReference**](OrganizationReference.md) |  | 
**pipeline_id** | **int** | Unique identifier of the Azure Pipeline within the Azure DevOps Project. | [optional] [readonly] 
**project** | [**ProjectReference**](ProjectReference.md) |  | 

## Example

```python
from openapi_client.models.pipeline_properties import PipelineProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineProperties from a JSON string
pipeline_properties_instance = PipelineProperties.from_json(json)
# print the JSON string representation of the object
print(PipelineProperties.to_json())

# convert the object into a dict
pipeline_properties_dict = pipeline_properties_instance.to_dict()
# create an instance of PipelineProperties from a dict
pipeline_properties_from_dict = PipelineProperties.from_dict(pipeline_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


