# DeleteBitbucketServerConfigOperationMetadata

Metadata for `DeleteBitbucketServerConfig` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitbucket_server_config** | **str** | The resource name of the BitbucketServerConfig to be deleted. Format: &#x60;projects/{project}/locations/{location}/bitbucketServerConfigs/{id}&#x60;. | [optional] 
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 

## Example

```python
from openapi_client.models.delete_bitbucket_server_config_operation_metadata import DeleteBitbucketServerConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteBitbucketServerConfigOperationMetadata from a JSON string
delete_bitbucket_server_config_operation_metadata_instance = DeleteBitbucketServerConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(DeleteBitbucketServerConfigOperationMetadata.to_json())

# convert the object into a dict
delete_bitbucket_server_config_operation_metadata_dict = delete_bitbucket_server_config_operation_metadata_instance.to_dict()
# create an instance of DeleteBitbucketServerConfigOperationMetadata from a dict
delete_bitbucket_server_config_operation_metadata_from_dict = DeleteBitbucketServerConfigOperationMetadata.from_dict(delete_bitbucket_server_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


