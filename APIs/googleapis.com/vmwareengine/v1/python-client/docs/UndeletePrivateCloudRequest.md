# UndeletePrivateCloudRequest

Request message for VmwareEngine.UndeletePrivateCloud

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Optional. The request ID must be a valid UUID with the exception that zero UUID is not supported (00000000-0000-0000-0000-000000000000). | [optional] 

## Example

```python
from openapi_client.models.undelete_private_cloud_request import UndeletePrivateCloudRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeletePrivateCloudRequest from a JSON string
undelete_private_cloud_request_instance = UndeletePrivateCloudRequest.from_json(json)
# print the JSON string representation of the object
print(UndeletePrivateCloudRequest.to_json())

# convert the object into a dict
undelete_private_cloud_request_dict = undelete_private_cloud_request_instance.to_dict()
# create an instance of UndeletePrivateCloudRequest from a dict
undelete_private_cloud_request_from_dict = UndeletePrivateCloudRequest.from_dict(undelete_private_cloud_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


