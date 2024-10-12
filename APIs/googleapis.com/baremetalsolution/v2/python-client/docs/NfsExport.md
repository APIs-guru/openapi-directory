# NfsExport

A NFS export entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_dev** | **bool** | Allow dev flag in NfsShare AllowedClientsRequest. | [optional] 
**allow_suid** | **bool** | Allow the setuid flag. | [optional] 
**cidr** | **str** | A CIDR range. | [optional] 
**machine_id** | **str** | Either a single machine, identified by an ID, or a comma-separated list of machine IDs. | [optional] 
**network_id** | **str** | Network to use to publish the export. | [optional] 
**no_root_squash** | **bool** | Disable root squashing, which is a feature of NFS. Root squash is a special mapping of the remote superuser (root) identity when using identity authentication. | [optional] 
**permissions** | **str** | Export permissions. | [optional] 

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


