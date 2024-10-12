# NFSMount

Configuration for an `NFSMount` to be attached to the VM.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **str** | A target NFS mount. The target must be specified as &#x60;address:/mount\&quot;. | [optional] 

## Example

```python
from openapi_client.models.nfs_mount import NFSMount

# TODO update the JSON string below
json = "{}"
# create an instance of NFSMount from a JSON string
nfs_mount_instance = NFSMount.from_json(json)
# print the JSON string representation of the object
print(NFSMount.to_json())

# convert the object into a dict
nfs_mount_dict = nfs_mount_instance.to_dict()
# create an instance of NFSMount from a dict
nfs_mount_from_dict = NFSMount.from_dict(nfs_mount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


