# ProcessAppManifestCallbackOperationMetadata

Metadata for `ProcessAppManifestCallback` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**complete_time** | **str** | Time the operation was completed. | [optional] 
**create_time** | **str** | Time the operation was created. | [optional] 
**github_enterprise_config** | **str** | The resource name of the GitHubEnterprise to be created. Format: &#x60;projects/{project}/locations/{location}/githubEnterpriseConfigs/{id}&#x60;. | [optional] 

## Example

```python
from openapi_client.models.process_app_manifest_callback_operation_metadata import ProcessAppManifestCallbackOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ProcessAppManifestCallbackOperationMetadata from a JSON string
process_app_manifest_callback_operation_metadata_instance = ProcessAppManifestCallbackOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(ProcessAppManifestCallbackOperationMetadata.to_json())

# convert the object into a dict
process_app_manifest_callback_operation_metadata_dict = process_app_manifest_callback_operation_metadata_instance.to_dict()
# create an instance of ProcessAppManifestCallbackOperationMetadata from a dict
process_app_manifest_callback_operation_metadata_from_dict = ProcessAppManifestCallbackOperationMetadata.from_dict(process_app_manifest_callback_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


