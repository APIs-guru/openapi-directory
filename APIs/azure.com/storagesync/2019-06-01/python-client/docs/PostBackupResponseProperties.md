# PostBackupResponseProperties

Post Backup Response Properties object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_endpoint_name** | **str** | cloud endpoint Name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.post_backup_response_properties import PostBackupResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PostBackupResponseProperties from a JSON string
post_backup_response_properties_instance = PostBackupResponseProperties.from_json(json)
# print the JSON string representation of the object
print(PostBackupResponseProperties.to_json())

# convert the object into a dict
post_backup_response_properties_dict = post_backup_response_properties_instance.to_dict()
# create an instance of PostBackupResponseProperties from a dict
post_backup_response_properties_from_dict = PostBackupResponseProperties.from_dict(post_backup_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


