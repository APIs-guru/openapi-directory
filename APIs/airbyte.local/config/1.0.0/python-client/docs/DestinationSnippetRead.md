# DestinationSnippetRead


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_definition_id** | **str** |  | 
**destination_id** | **str** |  | 
**destination_name** | **str** |  | 
**icon** | **str** |  | [optional] 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.destination_snippet_read import DestinationSnippetRead

# TODO update the JSON string below
json = "{}"
# create an instance of DestinationSnippetRead from a JSON string
destination_snippet_read_instance = DestinationSnippetRead.from_json(json)
# print the JSON string representation of the object
print(DestinationSnippetRead.to_json())

# convert the object into a dict
destination_snippet_read_dict = destination_snippet_read_instance.to_dict()
# create an instance of DestinationSnippetRead from a dict
destination_snippet_read_from_dict = DestinationSnippetRead.from_dict(destination_snippet_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


