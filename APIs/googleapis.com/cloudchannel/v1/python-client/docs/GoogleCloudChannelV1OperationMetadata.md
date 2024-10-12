# GoogleCloudChannelV1OperationMetadata

Provides contextual information about a google.longrunning.Operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**operation_type** | **str** | The RPC that initiated this Long Running Operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_operation_metadata import GoogleCloudChannelV1OperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1OperationMetadata from a JSON string
google_cloud_channel_v1_operation_metadata_instance = GoogleCloudChannelV1OperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1OperationMetadata.to_json())

# convert the object into a dict
google_cloud_channel_v1_operation_metadata_dict = google_cloud_channel_v1_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudChannelV1OperationMetadata from a dict
google_cloud_channel_v1_operation_metadata_from_dict = GoogleCloudChannelV1OperationMetadata.from_dict(google_cloud_channel_v1_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


