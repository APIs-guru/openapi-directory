# DeleteDeveloperMetadataResponse

The response from deleting developer metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleted_developer_metadata** | [**List[DeveloperMetadata]**](DeveloperMetadata.md) | The metadata that was deleted. | [optional] 

## Example

```python
from openapi_client.models.delete_developer_metadata_response import DeleteDeveloperMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDeveloperMetadataResponse from a JSON string
delete_developer_metadata_response_instance = DeleteDeveloperMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteDeveloperMetadataResponse.to_json())

# convert the object into a dict
delete_developer_metadata_response_dict = delete_developer_metadata_response_instance.to_dict()
# create an instance of DeleteDeveloperMetadataResponse from a dict
delete_developer_metadata_response_from_dict = DeleteDeveloperMetadataResponse.from_dict(delete_developer_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


