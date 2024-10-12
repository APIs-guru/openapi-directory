# CreatePermissionRequest

The request to add a single permission on the note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent** | **str** | Required. The parent note where this permission will be created. Format: &#x60;notes/{note}&#x60; | [optional] 
**permission** | [**Permission**](Permission.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_permission_request import CreatePermissionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePermissionRequest from a JSON string
create_permission_request_instance = CreatePermissionRequest.from_json(json)
# print the JSON string representation of the object
print(CreatePermissionRequest.to_json())

# convert the object into a dict
create_permission_request_dict = create_permission_request_instance.to_dict()
# create an instance of CreatePermissionRequest from a dict
create_permission_request_from_dict = CreatePermissionRequest.from_dict(create_permission_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


