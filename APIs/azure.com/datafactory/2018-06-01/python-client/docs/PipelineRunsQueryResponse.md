# PipelineRunsQueryResponse

A list pipeline runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for getting the next page of results, if any remaining results exist, null otherwise. | [optional] 
**value** | [**List[PipelineRun]**](PipelineRun.md) | List of pipeline runs. | 

## Example

```python
from openapi_client.models.pipeline_runs_query_response import PipelineRunsQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRunsQueryResponse from a JSON string
pipeline_runs_query_response_instance = PipelineRunsQueryResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineRunsQueryResponse.to_json())

# convert the object into a dict
pipeline_runs_query_response_dict = pipeline_runs_query_response_instance.to_dict()
# create an instance of PipelineRunsQueryResponse from a dict
pipeline_runs_query_response_from_dict = PipelineRunsQueryResponse.from_dict(pipeline_runs_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


