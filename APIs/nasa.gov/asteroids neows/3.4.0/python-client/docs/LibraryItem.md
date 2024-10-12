# LibraryItem

Represents a specific library item that is part of this project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**completion_date** | **str** | Date the library item was completed. | [optional] 
**description** | **str** | Description of the library item. | [optional] 
**external_url** | **str** | External URL for the library item. | [optional] 
**files** | **List[bytearray]** | List of files associated with the library item. | [optional] 
**id** | **int** | Unique identifier for the library item. | [optional] 
**published_by** | **str** | Publisher of the library item. | [optional] 
**published_date** | **str** | Date the library item was published. | [optional] 
**title** | **str** | Title of the library item | [optional] 
**type** | **str** | Identifies the type of library item, e.g. Image | [optional] 

## Example

```python
from openapi_client.models.library_item import LibraryItem

# TODO update the JSON string below
json = "{}"
# create an instance of LibraryItem from a JSON string
library_item_instance = LibraryItem.from_json(json)
# print the JSON string representation of the object
print(LibraryItem.to_json())

# convert the object into a dict
library_item_dict = library_item_instance.to_dict()
# create an instance of LibraryItem from a dict
library_item_from_dict = LibraryItem.from_dict(library_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


