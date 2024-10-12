# FstabEntryList

Fstab content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[FstabEntry]**](FstabEntry.md) | Fstab entries. | [optional] 

## Example

```python
from openapi_client.models.fstab_entry_list import FstabEntryList

# TODO update the JSON string below
json = "{}"
# create an instance of FstabEntryList from a JSON string
fstab_entry_list_instance = FstabEntryList.from_json(json)
# print the JSON string representation of the object
print(FstabEntryList.to_json())

# convert the object into a dict
fstab_entry_list_dict = fstab_entry_list_instance.to_dict()
# create an instance of FstabEntryList from a dict
fstab_entry_list_from_dict = FstabEntryList.from_dict(fstab_entry_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


