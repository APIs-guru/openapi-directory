# ResponseWithContinuationArtifact

The response of a list operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link for next set of results. | [optional] 
**value** | [**List[Artifact]**](Artifact.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.response_with_continuation_artifact import ResponseWithContinuationArtifact

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseWithContinuationArtifact from a JSON string
response_with_continuation_artifact_instance = ResponseWithContinuationArtifact.from_json(json)
# print the JSON string representation of the object
print(ResponseWithContinuationArtifact.to_json())

# convert the object into a dict
response_with_continuation_artifact_dict = response_with_continuation_artifact_instance.to_dict()
# create an instance of ResponseWithContinuationArtifact from a dict
response_with_continuation_artifact_from_dict = ResponseWithContinuationArtifact.from_dict(response_with_continuation_artifact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


