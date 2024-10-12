# PostRestoreAppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**responsible_admin_id** | **str** | The internal unique id (UUID) of the account of the user, who makes the request. | 

## Example

```python
from openapi_client.models.post_restore_app_request import PostRestoreAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostRestoreAppRequest from a JSON string
post_restore_app_request_instance = PostRestoreAppRequest.from_json(json)
# print the JSON string representation of the object
print(PostRestoreAppRequest.to_json())

# convert the object into a dict
post_restore_app_request_dict = post_restore_app_request_instance.to_dict()
# create an instance of PostRestoreAppRequest from a dict
post_restore_app_request_from_dict = PostRestoreAppRequest.from_dict(post_restore_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


