# Bookshelf


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access** | **str** | Whether this bookshelf is PUBLIC or PRIVATE. | [optional] 
**created** | **str** | Created time for this bookshelf (formatted UTC timestamp with millisecond resolution). | [optional] 
**description** | **str** | Description of this bookshelf. | [optional] 
**id** | **int** | Id of this bookshelf, only unique by user. | [optional] 
**kind** | **str** | Resource type for bookshelf metadata. | [optional] 
**self_link** | **str** | URL to this resource. | [optional] 
**title** | **str** | Title of this bookshelf. | [optional] 
**updated** | **str** | Last modified time of this bookshelf (formatted UTC timestamp with millisecond resolution). | [optional] 
**volume_count** | **int** | Number of volumes in this bookshelf. | [optional] 
**volumes_last_updated** | **str** | Last time a volume was added or removed from this bookshelf (formatted UTC timestamp with millisecond resolution). | [optional] 

## Example

```python
from openapi_client.models.bookshelf import Bookshelf

# TODO update the JSON string below
json = "{}"
# create an instance of Bookshelf from a JSON string
bookshelf_instance = Bookshelf.from_json(json)
# print the JSON string representation of the object
print(Bookshelf.to_json())

# convert the object into a dict
bookshelf_dict = bookshelf_instance.to_dict()
# create an instance of Bookshelf from a dict
bookshelf_from_dict = Bookshelf.from_dict(bookshelf_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


