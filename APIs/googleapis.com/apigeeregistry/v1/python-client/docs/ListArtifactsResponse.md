# ListArtifactsResponse

Response message for ListArtifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifacts** | [**List[Artifact]**](Artifact.md) | The artifacts from the specified publisher. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.list_artifacts_response import ListArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListArtifactsResponse from a JSON string
list_artifacts_response_instance = ListArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(ListArtifactsResponse.to_json())

# convert the object into a dict
list_artifacts_response_dict = list_artifacts_response_instance.to_dict()
# create an instance of ListArtifactsResponse from a dict
list_artifacts_response_from_dict = ListArtifactsResponse.from_dict(list_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


