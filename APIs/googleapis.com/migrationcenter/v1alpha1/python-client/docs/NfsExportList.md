# NfsExportList

NFS exports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entries** | [**List[NfsExport]**](NfsExport.md) | NFS export entries. | [optional] 

## Example

```python
from openapi_client.models.nfs_export_list import NfsExportList

# TODO update the JSON string below
json = "{}"
# create an instance of NfsExportList from a JSON string
nfs_export_list_instance = NfsExportList.from_json(json)
# print the JSON string representation of the object
print(NfsExportList.to_json())

# convert the object into a dict
nfs_export_list_dict = nfs_export_list_instance.to_dict()
# create an instance of NfsExportList from a dict
nfs_export_list_from_dict = NfsExportList.from_dict(nfs_export_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


