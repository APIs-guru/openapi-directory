# RemoveMatterPermissionsRequest

Remove an account as a matter collaborator.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID. | [optional] 

## Example

```python
from openapi_client.models.remove_matter_permissions_request import RemoveMatterPermissionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveMatterPermissionsRequest from a JSON string
remove_matter_permissions_request_instance = RemoveMatterPermissionsRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveMatterPermissionsRequest.to_json())

# convert the object into a dict
remove_matter_permissions_request_dict = remove_matter_permissions_request_instance.to_dict()
# create an instance of RemoveMatterPermissionsRequest from a dict
remove_matter_permissions_request_from_dict = RemoveMatterPermissionsRequest.from_dict(remove_matter_permissions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


