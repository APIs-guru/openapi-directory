# GoogleApiServiceusageV1OperationMetadata

The operation metadata returned for the batchend services operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_names** | **List[str]** | The full name of the resources that this operation is directly associated with. | [optional] 

## Example

```python
from openapi_client.models.google_api_serviceusage_v1_operation_metadata import GoogleApiServiceusageV1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleApiServiceusageV1OperationMetadata from a JSON string
google_api_serviceusage_v1_operation_metadata_instance = GoogleApiServiceusageV1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleApiServiceusageV1OperationMetadata.to_json())

# convert the object into a dict
google_api_serviceusage_v1_operation_metadata_dict = google_api_serviceusage_v1_operation_metadata_instance.to_dict()
# create an instance of GoogleApiServiceusageV1OperationMetadata from a dict
google_api_serviceusage_v1_operation_metadata_from_dict = GoogleApiServiceusageV1OperationMetadata.from_dict(google_api_serviceusage_v1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


