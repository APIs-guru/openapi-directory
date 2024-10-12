# NfsExport

NFS export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_directory** | **str** | The directory being exported. | [optional] 
**hosts** | **List[str]** | The hosts or networks to which the export is being shared. | [optional] 

## Example

```python
from openapi_client.models.nfs_export import NfsExport

# TODO update the JSON string below
json = "{}"
# create an instance of NfsExport from a JSON string
nfs_export_instance = NfsExport.from_json(json)
# print the JSON string representation of the object
print(NfsExport.to_json())

# convert the object into a dict
nfs_export_dict = nfs_export_instance.to_dict()
# create an instance of NfsExport from a dict
nfs_export_from_dict = NfsExport.from_dict(nfs_export_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


