# BatchCreatePermissionsResponse

The response for creating permissions on a note.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**permissions** | [**List[Permission]**](Permission.md) | Permissions created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_permissions_response import BatchCreatePermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreatePermissionsResponse from a JSON string
batch_create_permissions_response_instance = BatchCreatePermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreatePermissionsResponse.to_json())

# convert the object into a dict
batch_create_permissions_response_dict = batch_create_permissions_response_instance.to_dict()
# create an instance of BatchCreatePermissionsResponse from a dict
batch_create_permissions_response_from_dict = BatchCreatePermissionsResponse.from_dict(batch_create_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


