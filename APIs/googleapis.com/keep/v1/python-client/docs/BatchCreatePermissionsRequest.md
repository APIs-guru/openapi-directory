# BatchCreatePermissionsRequest

The request to add one or more permissions on the note. Currently, only the `WRITER` role may be specified. If adding a permission fails, then the entire request fails and no changes are made.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[CreatePermissionRequest]**](CreatePermissionRequest.md) | The request message specifying the resources to create. | [optional] 

## Example

```python
from openapi_client.models.batch_create_permissions_request import BatchCreatePermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePermissionsRequest from a JSON string
batch_create_permissions_request_instance = BatchCreatePermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePermissionsRequest.to_json())

# convert the object into a dict
batch_create_permissions_request_dict = batch_create_permissions_request_instance.to_dict()
# create an instance of BatchCreatePermissionsRequest from a dict
batch_create_permissions_request_from_dict = BatchCreatePermissionsRequest.from_dict(batch_create_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


