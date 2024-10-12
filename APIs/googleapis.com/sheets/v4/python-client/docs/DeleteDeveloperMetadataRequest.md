# DeleteDeveloperMetadataRequest

A request to delete developer metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_filter** | [**DataFilter**](DataFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.delete_developer_metadata_request import DeleteDeveloperMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteDeveloperMetadataRequest from a JSON string
delete_developer_metadata_request_instance = DeleteDeveloperMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteDeveloperMetadataRequest.to_json())

# convert the object into a dict
delete_developer_metadata_request_dict = delete_developer_metadata_request_instance.to_dict()
# create an instance of DeleteDeveloperMetadataRequest from a dict
delete_developer_metadata_request_from_dict = DeleteDeveloperMetadataRequest.from_dict(delete_developer_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


