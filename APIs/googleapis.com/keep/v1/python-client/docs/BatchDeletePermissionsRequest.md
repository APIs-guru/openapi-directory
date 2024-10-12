# BatchDeletePermissionsRequest

The request to remove one or more permissions from a note. A permission with the `OWNER` role can't be removed. If removing a permission fails, then the entire request fails and no changes are made. Returns a 400 bad request error if a specified permission does not exist on the note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**names** | **List[str]** | Required. The names of the permissions to delete. Format: &#x60;notes/{note}/permissions/{permission}&#x60; | [optional] 

## Example

```python
from openapi_client.models.batch_delete_permissions_request import BatchDeletePermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeletePermissionsRequest from a JSON string
batch_delete_permissions_request_instance = BatchDeletePermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeletePermissionsRequest.to_json())

# convert the object into a dict
batch_delete_permissions_request_dict = batch_delete_permissions_request_instance.to_dict()
# create an instance of BatchDeletePermissionsRequest from a dict
batch_delete_permissions_request_from_dict = BatchDeletePermissionsRequest.from_dict(batch_delete_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


