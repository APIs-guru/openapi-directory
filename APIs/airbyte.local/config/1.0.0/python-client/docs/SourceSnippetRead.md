# SourceSnippetRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**icon** | **str** |  | [optional] 
**name** | **str** |  | 
**source_definition_id** | **str** |  | 
**source_id** | **str** |  | 
**source_name** | **str** |  | 

## Example

```python
from openapi_client.models.source_snippet_read import SourceSnippetRead

# TODO update the JSON string below
json = "{}"
# create an instance of SourceSnippetRead from a JSON string
source_snippet_read_instance = SourceSnippetRead.from_json(json)
# print the JSON string representation of the object
print(SourceSnippetRead.to_json())

# convert the object into a dict
source_snippet_read_dict = source_snippet_read_instance.to_dict()
# create an instance of SourceSnippetRead from a dict
source_snippet_read_from_dict = SourceSnippetRead.from_dict(source_snippet_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


