# UpdateBitbucketServerConfigOperationMetadata

Metadata for `UpdateBitbucketServerConfig` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bitbucket_server_config** | **str** | The resource name of the BitbucketServerConfig to be updated. Format: &#x60;projects/{project}/locations/{location}/bitbucketServerConfigs/{id}&#x60;. | [optional] 
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 

## Example

```python
from openapi_client.models.update_bitbucket_server_config_operation_metadata import UpdateBitbucketServerConfigOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBitbucketServerConfigOperationMetadata from a JSON string
update_bitbucket_server_config_operation_metadata_instance = UpdateBitbucketServerConfigOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateBitbucketServerConfigOperationMetadata.to_json())

# convert the object into a dict
update_bitbucket_server_config_operation_metadata_dict = update_bitbucket_server_config_operation_metadata_instance.to_dict()
# create an instance of UpdateBitbucketServerConfigOperationMetadata from a dict
update_bitbucket_server_config_operation_metadata_from_dict = UpdateBitbucketServerConfigOperationMetadata.from_dict(update_bitbucket_server_config_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


