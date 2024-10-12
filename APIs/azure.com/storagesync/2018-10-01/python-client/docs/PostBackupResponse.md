# PostBackupResponse

Post Backup Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backup_metadata** | [**PostBackupResponseProperties**](PostBackupResponseProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.post_backup_response import PostBackupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PostBackupResponse from a JSON string
post_backup_response_instance = PostBackupResponse.from_json(json)
# print the JSON string representation of the object
print(PostBackupResponse.to_json())

# convert the object into a dict
post_backup_response_dict = post_backup_response_instance.to_dict()
# create an instance of PostBackupResponse from a dict
post_backup_response_from_dict = PostBackupResponse.from_dict(post_backup_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


