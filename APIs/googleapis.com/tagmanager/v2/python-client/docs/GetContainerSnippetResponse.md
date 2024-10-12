# GetContainerSnippetResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**snippet** | **str** | Tagging snippet for a Container. | [optional] 

## Example

```python
from openapi_client.models.get_container_snippet_response import GetContainerSnippetResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetContainerSnippetResponse from a JSON string
get_container_snippet_response_instance = GetContainerSnippetResponse.from_json(json)
# print the JSON string representation of the object
print(GetContainerSnippetResponse.to_json())

# convert the object into a dict
get_container_snippet_response_dict = get_container_snippet_response_instance.to_dict()
# create an instance of GetContainerSnippetResponse from a dict
get_container_snippet_response_from_dict = GetContainerSnippetResponse.from_dict(get_container_snippet_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


