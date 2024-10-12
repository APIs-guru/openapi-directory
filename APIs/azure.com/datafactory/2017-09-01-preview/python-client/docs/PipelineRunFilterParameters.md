# PipelineRunFilterParameters

Query parameters for listing pipeline runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for getting the next page of results. Null for first page. | [optional] 
**filters** | [**List[PipelineRunQueryFilter]**](PipelineRunQueryFilter.md) | List of filters. | [optional] 
**last_updated_after** | **datetime** | The time at or after which the pipeline run event was updated in &#39;ISO 8601&#39; format. | 
**last_updated_before** | **datetime** | The time at or before which the pipeline run event was updated in &#39;ISO 8601&#39; format. | 
**order_by** | [**List[PipelineRunQueryOrderBy]**](PipelineRunQueryOrderBy.md) | List of OrderBy option. | [optional] 

## Example

```python
from openapi_client.models.pipeline_run_filter_parameters import PipelineRunFilterParameters

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRunFilterParameters from a JSON string
pipeline_run_filter_parameters_instance = PipelineRunFilterParameters.from_json(json)
# print the JSON string representation of the object
print(PipelineRunFilterParameters.to_json())

# convert the object into a dict
pipeline_run_filter_parameters_dict = pipeline_run_filter_parameters_instance.to_dict()
# create an instance of PipelineRunFilterParameters from a dict
pipeline_run_filter_parameters_from_dict = PipelineRunFilterParameters.from_dict(pipeline_run_filter_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


