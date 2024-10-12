# NFS

Represents an NFS volume.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_path** | **str** | Remote source path exported from the NFS, e.g., \&quot;/share\&quot;. | [optional] 
**server** | **str** | The IP address of the NFS. | [optional] 

## Example

```python
from openapi_client.models.nfs import NFS

# TODO update the JSON string below
json = "{}"
# create an instance of NFS from a JSON string
nfs_instance = NFS.from_json(json)
# print the JSON string representation of the object
print(NFS.to_json())

# convert the object into a dict
nfs_dict = nfs_instance.to_dict()
# create an instance of NFS from a dict
nfs_from_dict = NFS.from_dict(nfs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


