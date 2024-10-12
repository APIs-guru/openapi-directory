# FolderEntities

Represents a Google Tag Manager Folder's contents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 
**tag** | [**List[Tag]**](Tag.md) | The list of tags inside the folder. | [optional] 
**trigger** | [**List[Trigger]**](Trigger.md) | The list of triggers inside the folder. | [optional] 
**variable** | [**List[Variable]**](Variable.md) | The list of variables inside the folder. | [optional] 

## Example

```python
from openapi_client.models.folder_entities import FolderEntities

# TODO update the JSON string below
json = "{}"
# create an instance of FolderEntities from a JSON string
folder_entities_instance = FolderEntities.from_json(json)
# print the JSON string representation of the object
print(FolderEntities.to_json())

# convert the object into a dict
folder_entities_dict = folder_entities_instance.to_dict()
# create an instance of FolderEntities from a dict
folder_entities_from_dict = FolderEntities.from_dict(folder_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


