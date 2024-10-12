# GitSourceContext

A GitSourceContext denotes a particular revision in a third party Git repository (e.g. GitHub).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**revision_id** | **str** | Git commit hash. required. | [optional] 
**url** | **str** | Git repository URL. | [optional] 

## Example

```python
from openapi_client.models.git_source_context import GitSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of GitSourceContext from a JSON string
git_source_context_instance = GitSourceContext.from_json(json)
# print the JSON string representation of the object
print(GitSourceContext.to_json())

# convert the object into a dict
git_source_context_dict = git_source_context_instance.to_dict()
# create an instance of GitSourceContext from a dict
git_source_context_from_dict = GitSourceContext.from_dict(git_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


