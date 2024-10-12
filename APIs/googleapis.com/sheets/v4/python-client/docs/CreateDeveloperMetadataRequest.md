# CreateDeveloperMetadataRequest

A request to create developer metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_metadata** | [**DeveloperMetadata**](DeveloperMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_developer_metadata_request import CreateDeveloperMetadataRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateDeveloperMetadataRequest from a JSON string
create_developer_metadata_request_instance = CreateDeveloperMetadataRequest.from_json(json)
# print the JSON string representation of the object
print(CreateDeveloperMetadataRequest.to_json())

# convert the object into a dict
create_developer_metadata_request_dict = create_developer_metadata_request_instance.to_dict()
# create an instance of CreateDeveloperMetadataRequest from a dict
create_developer_metadata_request_from_dict = CreateDeveloperMetadataRequest.from_dict(create_developer_metadata_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


