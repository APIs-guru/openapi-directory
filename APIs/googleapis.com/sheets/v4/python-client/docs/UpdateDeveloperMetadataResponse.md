# UpdateDeveloperMetadataResponse

The response from updating developer metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_metadata** | [**List[DeveloperMetadata]**](DeveloperMetadata.md) | The updated developer metadata. | [optional] 

## Example

```python
from openapi_client.models.update_developer_metadata_response import UpdateDeveloperMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeveloperMetadataResponse from a JSON string
update_developer_metadata_response_instance = UpdateDeveloperMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(UpdateDeveloperMetadataResponse.to_json())

# convert the object into a dict
update_developer_metadata_response_dict = update_developer_metadata_response_instance.to_dict()
# create an instance of UpdateDeveloperMetadataResponse from a dict
update_developer_metadata_response_from_dict = UpdateDeveloperMetadataResponse.from_dict(update_developer_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


