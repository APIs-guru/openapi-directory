# UpdateDeviceMetadataInBatchRequest

Request to update device metadata in batch.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**updates** | [**List[UpdateMetadataArguments]**](UpdateMetadataArguments.md) | Required. The list of metadata updates. | [optional] 

## Example

```python
from openapi_client.models.update_device_metadata_in_batch_request import UpdateDeviceMetadataInBatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceMetadataInBatchRequest from a JSON string
update_device_metadata_in_batch_request_instance = UpdateDeviceMetadataInBatchRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceMetadataInBatchRequest.to_json())

# convert the object into a dict
update_device_metadata_in_batch_request_dict = update_device_metadata_in_batch_request_instance.to_dict()
# create an instance of UpdateDeviceMetadataInBatchRequest from a dict
update_device_metadata_in_batch_request_from_dict = UpdateDeviceMetadataInBatchRequest.from_dict(update_device_metadata_in_batch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


