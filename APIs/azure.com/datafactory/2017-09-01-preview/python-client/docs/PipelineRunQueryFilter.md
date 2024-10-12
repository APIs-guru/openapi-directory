# PipelineRunQueryFilter

Query filter option for listing pipeline runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operand** | **str** | Parameter name to be used for filter. | 
**operator** | **str** | Operator to be used for filter. | 
**values** | **List[str]** | List of filter values. | 

## Example

```python
from openapi_client.models.pipeline_run_query_filter import PipelineRunQueryFilter

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRunQueryFilter from a JSON string
pipeline_run_query_filter_instance = PipelineRunQueryFilter.from_json(json)
# print the JSON string representation of the object
print(PipelineRunQueryFilter.to_json())

# convert the object into a dict
pipeline_run_query_filter_dict = pipeline_run_query_filter_instance.to_dict()
# create an instance of PipelineRunQueryFilter from a dict
pipeline_run_query_filter_from_dict = PipelineRunQueryFilter.from_dict(pipeline_run_query_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


