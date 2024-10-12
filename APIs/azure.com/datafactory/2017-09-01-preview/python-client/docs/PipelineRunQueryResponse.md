# PipelineRunQueryResponse

A list pipeline runs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | The continuation token for getting the next page of results, if any remaining results exist, null otherwise. | [optional] 
**value** | [**List[PipelineRun]**](PipelineRun.md) | List of pipeline runs. | 

## Example

```python
from openapi_client.models.pipeline_run_query_response import PipelineRunQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineRunQueryResponse from a JSON string
pipeline_run_query_response_instance = PipelineRunQueryResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineRunQueryResponse.to_json())

# convert the object into a dict
pipeline_run_query_response_dict = pipeline_run_query_response_instance.to_dict()
# create an instance of PipelineRunQueryResponse from a dict
pipeline_run_query_response_from_dict = PipelineRunQueryResponse.from_dict(pipeline_run_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


