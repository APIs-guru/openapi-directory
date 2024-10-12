# ArchiveHistory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archived** | **bool** |  | [optional] 
**modified_at** | **str** |  | [optional] 
**notes** | **str** |  | [optional] 
**reason** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.archive_history import ArchiveHistory

# TODO update the JSON string below
json = "{}"
# create an instance of ArchiveHistory from a JSON string
archive_history_instance = ArchiveHistory.from_json(json)
# print the JSON string representation of the object
print(ArchiveHistory.to_json())

# convert the object into a dict
archive_history_dict = archive_history_instance.to_dict()
# create an instance of ArchiveHistory from a dict
archive_history_from_dict = ArchiveHistory.from_dict(archive_history_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


