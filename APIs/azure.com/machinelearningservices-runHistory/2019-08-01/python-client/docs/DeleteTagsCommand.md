# DeleteTagsCommand


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.delete_tags_command import DeleteTagsCommand

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteTagsCommand from a JSON string
delete_tags_command_instance = DeleteTagsCommand.from_json(json)
# print the JSON string representation of the object
print(DeleteTagsCommand.to_json())

# convert the object into a dict
delete_tags_command_dict = delete_tags_command_instance.to_dict()
# create an instance of DeleteTagsCommand from a dict
delete_tags_command_from_dict = DeleteTagsCommand.from_dict(delete_tags_command_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


