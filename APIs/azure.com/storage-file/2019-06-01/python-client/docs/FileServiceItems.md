# FileServiceItems


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[FileServiceProperties]**](FileServiceProperties.md) | List of file services returned. | [optional] [readonly] 

## Example

```python
from openapi_client.models.file_service_items import FileServiceItems

# TODO update the JSON string below
json = "{}"
# create an instance of FileServiceItems from a JSON string
file_service_items_instance = FileServiceItems.from_json(json)
# print the JSON string representation of the object
print(FileServiceItems.to_json())

# convert the object into a dict
file_service_items_dict = file_service_items_instance.to_dict()
# create an instance of FileServiceItems from a dict
file_service_items_from_dict = FileServiceItems.from_dict(file_service_items_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


