# PipelineRunInvokedBy

Provides entity name and id that started the pipeline run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID of the entity that started the run. | [optional] [readonly] 
**name** | **str** | Name of the entity that started the pipeline run. | [optional] [readonly] 

## Example

```python
from openapi_client.models.pipeline_run_invoked_by import PipelineRunInvokedBy

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRunInvokedBy from a JSON string
pipeline_run_invoked_by_instance = PipelineRunInvokedBy.from_json(json)
# print the JSON string representation of the object
print(PipelineRunInvokedBy.to_json())

# convert the object into a dict
pipeline_run_invoked_by_dict = pipeline_run_invoked_by_instance.to_dict()
# create an instance of PipelineRunInvokedBy from a dict
pipeline_run_invoked_by_from_dict = PipelineRunInvokedBy.from_dict(pipeline_run_invoked_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


