# ResponseWithContinuationArtifactSource

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[ArtifactSource]**](ArtifactSource.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_artifact_source import ResponseWithContinuationArtifactSource

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationArtifactSource from a JSON string
response_with_continuation_artifact_source_instance = ResponseWithContinuationArtifactSource.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationArtifactSource.to_json())

# convert the object into a dict
response_with_continuation_artifact_source_dict = response_with_continuation_artifact_source_instance.to_dict()
# create an instance of ResponseWithContinuationArtifactSource from a dict
response_with_continuation_artifact_source_from_dict = ResponseWithContinuationArtifactSource.from_dict(response_with_continuation_artifact_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


