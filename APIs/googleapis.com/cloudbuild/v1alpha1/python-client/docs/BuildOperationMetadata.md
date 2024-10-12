# BuildOperationMetadata

Metadata for build operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build** | [**Build**](Build.md) |  | [optional] 

## Example

```python
from openapi_client.models.build_operation_metadata import BuildOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of BuildOperationMetadata from a JSON string
build_operation_metadata_instance = BuildOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(BuildOperationMetadata.to_json())

# convert the object into a dict
build_operation_metadata_dict = build_operation_metadata_instance.to_dict()
# create an instance of BuildOperationMetadata from a dict
build_operation_metadata_from_dict = BuildOperationMetadata.from_dict(build_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


