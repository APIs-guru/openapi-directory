# RenameNfsShareRequest

Message requesting rename of a server.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_nfsshare_id** | **str** | Required. The new &#x60;id&#x60; of the nfsshare. | [optional] 

## Example

```python
from openapi_client.models.rename_nfs_share_request import RenameNfsShareRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RenameNfsShareRequest from a JSON string
rename_nfs_share_request_instance = RenameNfsShareRequest.from_json(json)
# print the JSON string representation of the object
print(RenameNfsShareRequest.to_json())

# convert the object into a dict
rename_nfs_share_request_dict = rename_nfs_share_request_instance.to_dict()
# create an instance of RenameNfsShareRequest from a dict
rename_nfs_share_request_from_dict = RenameNfsShareRequest.from_dict(rename_nfs_share_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


