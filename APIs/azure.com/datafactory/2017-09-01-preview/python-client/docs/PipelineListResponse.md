# PipelineListResponse

A list of pipeline resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link to the next page of results, if any remaining results exist. | [optional] 
**value** | [**List[PipelineResource]**](PipelineResource.md) | List of pipelines. | 

## Example

```python
from openapi_client.models.pipeline_list_response import PipelineListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PipelineListResponse from a JSON string
pipeline_list_response_instance = PipelineListResponse.from_json(json)
# print the JSON string representation of the object
print(PipelineListResponse.to_json())

# convert the object into a dict
pipeline_list_response_dict = pipeline_list_response_instance.to_dict()
# create an instance of PipelineListResponse from a dict
pipeline_list_response_from_dict = PipelineListResponse.from_dict(pipeline_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


