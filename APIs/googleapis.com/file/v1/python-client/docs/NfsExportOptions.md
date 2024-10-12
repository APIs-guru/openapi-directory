# NfsExportOptions

NFS export options specifications.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_mode** | **str** | Either READ_ONLY, for allowing only read requests on the exported directory, or READ_WRITE, for allowing both read and write requests. The default is READ_WRITE. | [optional] 
**anon_gid** | **str** | An integer representing the anonymous group id with a default value of 65534. Anon_gid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. | [optional] 
**anon_uid** | **str** | An integer representing the anonymous user id with a default value of 65534. Anon_uid may only be set with squash_mode of ROOT_SQUASH. An error will be returned if this field is specified for other squash_mode settings. | [optional] 
**ip_ranges** | **List[str]** | List of either an IPv4 addresses in the format &#x60;{octet1}.{octet2}.{octet3}.{octet4}&#x60; or CIDR ranges in the format &#x60;{octet1}.{octet2}.{octet3}.{octet4}/{mask size}&#x60; which may mount the file share. Overlapping IP ranges are not allowed, both within and across NfsExportOptions. An error will be returned. The limit is 64 IP ranges/addresses for each FileShareConfig among all NfsExportOptions. | [optional] 
**squash_mode** | **str** | Either NO_ROOT_SQUASH, for allowing root access on the exported directory, or ROOT_SQUASH, for not allowing root access. The default is NO_ROOT_SQUASH. | [optional] 

## Example

```python
from openapi_client.models.nfs_export_options import NfsExportOptions

# TODO update the JSON string below
json = "{}"
# create an instance of NfsExportOptions from a JSON string
nfs_export_options_instance = NfsExportOptions.from_json(json)
# print the JSON string representation of the object
print(NfsExportOptions.to_json())

# convert the object into a dict
nfs_export_options_dict = nfs_export_options_instance.to_dict()
# create an instance of NfsExportOptions from a dict
nfs_export_options_from_dict = NfsExportOptions.from_dict(nfs_export_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


