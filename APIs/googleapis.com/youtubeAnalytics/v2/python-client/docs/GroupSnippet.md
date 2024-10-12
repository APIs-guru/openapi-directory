# GroupSnippet

A group snippet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**published_at** | **str** | The date and time that the group was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. | [optional] 
**title** | **str** | The group name. The value must be a non-empty string. | [optional] 

## Example

```python
from openapi_client.models.group_snippet import GroupSnippet

# TODO update the JSON string below
json = "{}"
# create an instance of GroupSnippet from a JSON string
group_snippet_instance = GroupSnippet.from_json(json)
# print the JSON string representation of the object
print(GroupSnippet.to_json())

# convert the object into a dict
group_snippet_dict = group_snippet_instance.to_dict()
# create an instance of GroupSnippet from a dict
group_snippet_from_dict = GroupSnippet.from_dict(group_snippet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


