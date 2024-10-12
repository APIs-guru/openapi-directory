# ManageSnippet


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**groups** | **List[str]** |  | [optional] 
**name** | **str** |  | [optional] 
**script** | **str** |  | [optional] 
**script_data** | **str** |  | [optional] 
**short_code** | **str** |  | [optional] 
**template** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.manage_snippet import ManageSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of ManageSnippet from a JSON string
manage_snippet_instance = ManageSnippet.from_json(json)
# print the JSON string representation of the object
print(ManageSnippet.to_json())

# convert the object into a dict
manage_snippet_dict = manage_snippet_instance.to_dict()
# create an instance of ManageSnippet from a dict
manage_snippet_from_dict = ManageSnippet.from_dict(manage_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


