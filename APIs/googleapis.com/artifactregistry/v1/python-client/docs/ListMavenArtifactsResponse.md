# ListMavenArtifactsResponse

The response from listing maven artifacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maven_artifacts** | [**List[MavenArtifact]**](MavenArtifact.md) | The maven artifacts returned. | [optional] 
**next_page_token** | **str** | The token to retrieve the next page of artifacts, or empty if there are no more artifacts to return. | [optional] 

## Example

```python
from openapi_client.models.list_maven_artifacts_response import ListMavenArtifactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListMavenArtifactsResponse from a JSON string
list_maven_artifacts_response_instance = ListMavenArtifactsResponse.from_json(json)
# print the JSON string representation of the object
print(ListMavenArtifactsResponse.to_json())

# convert the object into a dict
list_maven_artifacts_response_dict = list_maven_artifacts_response_instance.to_dict()
# create an instance of ListMavenArtifactsResponse from a dict
list_maven_artifacts_response_from_dict = ListMavenArtifactsResponse.from_dict(list_maven_artifacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


