# PipelineListResult

Result of a request to list all Azure Pipelines under a given scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of Pipelines, if there are any. | [optional] 
**value** | [**List[Pipeline]**](Pipeline.md) | List of pipelines. | [optional] 

## Example

```python
from openapi_client.models.pipeline_list_result import PipelineListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineListResult from a JSON string
pipeline_list_result_instance = PipelineListResult.from_json(json)
# print the JSON string representation of the object
print(PipelineListResult.to_json())

# convert the object into a dict
pipeline_list_result_dict = pipeline_list_result_instance.to_dict()
# create an instance of PipelineListResult from a dict
pipeline_list_result_from_dict = PipelineListResult.from_dict(pipeline_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


