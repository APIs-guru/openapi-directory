# FileShareItems

Response schema. Contains list of shares returned, and if paging is requested or required, a URL to next page of shares.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Request URL that can be used to query next page of shares. Returned when total number of requested shares exceed maximum page size. | [optional] [readonly] 
**value** | [**List[FileShareItem]**](FileShareItem.md) | List of file shares returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_share_items import FileShareItems

# TODO update the JSON string below
json = "{}"
# create an instance of FileShareItems from a JSON string
file_share_items_instance = FileShareItems.from_json(json)
# print the JSON string representation of the object
print(FileShareItems.to_json())

# convert the object into a dict
file_share_items_dict = file_share_items_instance.to_dict()
# create an instance of FileShareItems from a dict
file_share_items_from_dict = FileShareItems.from_dict(file_share_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


