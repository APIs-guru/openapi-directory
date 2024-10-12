# GlusterFs


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**server_address** | **str** | The server address of one of the servers that hosts the GlusterFS. Can be either the IP address  or server name. | [optional] 
**volume_name** | **str** | The name of the created GlusterFS volume. | [optional] 

## Example

```python
from openapi_client.models.gluster_fs import GlusterFs

# TODO update the JSON string below
json = "{}"
# create an instance of GlusterFs from a JSON string
gluster_fs_instance = GlusterFs.from_json(json)
# print the JSON string representation of the object
print(GlusterFs.to_json())

# convert the object into a dict
gluster_fs_dict = gluster_fs_instance.to_dict()
# create an instance of GlusterFs from a dict
gluster_fs_from_dict = GlusterFs.from_dict(gluster_fs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


