# PipelineRunQueryOrderBy

An object to provide order by options for listing pipeline runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**order** | **str** | Sorting order of the parameter. | 
**order_by** | **str** | Parameter name to be used for order by. | 

## Example

```python
from openapi_client.models.pipeline_run_query_order_by import PipelineRunQueryOrderBy

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRunQueryOrderBy from a JSON string
pipeline_run_query_order_by_instance = PipelineRunQueryOrderBy.from_json(json)
# print the JSON string representation of the object
print(PipelineRunQueryOrderBy.to_json())

# convert the object into a dict
pipeline_run_query_order_by_dict = pipeline_run_query_order_by_instance.to_dict()
# create an instance of PipelineRunQueryOrderBy from a dict
pipeline_run_query_order_by_from_dict = PipelineRunQueryOrderBy.from_dict(pipeline_run_query_order_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


