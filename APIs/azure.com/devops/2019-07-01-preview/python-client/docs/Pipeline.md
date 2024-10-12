# Pipeline

Azure DevOps Pipeline used to configure Continuous Integration (CI) & Continuous Delivery (CD) for Azure resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PipelineProperties**](PipelineProperties.md) |  | 
**id** | **str** | Resource Id | [optional] [readonly] 
**location** | **str** | Resource Location | [optional] 
**name** | **str** | Resource Name | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource Tags | [optional] 
**type** | **str** | Resource Type | [optional] [readonly] 

## Example

```python
from openapi_client.models.pipeline import Pipeline

# TODO update the JSON string below
json = "{}"
# create an instance of Pipeline from a JSON string
pipeline_instance = Pipeline.from_json(json)
# print the JSON string representation of the object
print(Pipeline.to_json())

# convert the object into a dict
pipeline_dict = pipeline_instance.to_dict()
# create an instance of Pipeline from a dict
pipeline_from_dict = Pipeline.from_dict(pipeline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


