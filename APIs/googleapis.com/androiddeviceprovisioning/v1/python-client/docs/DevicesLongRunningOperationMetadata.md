# DevicesLongRunningOperationMetadata

Tracks the status of a long-running operation to asynchronously update a batch of reseller metadata attached to devices. To learn more, read [Long‑running batch operations](/zero-touch/guides/how-it-works#operations).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**devices_count** | **int** | The number of metadata updates in the operation. This might be different from the number of updates in the request if the API can&#39;t parse some of the updates. | [optional] 
**processing_status** | **str** | The processing status of the operation. | [optional] 
**progress** | **int** | The processing progress of the operation. Measured as a number from 0 to 100. A value of 10O doesn&#39;t always mean the operation completed—check for the inclusion of a &#x60;done&#x60; field. | [optional] 

## Example

```python
from openapi_client.models.devices_long_running_operation_metadata import DevicesLongRunningOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of DevicesLongRunningOperationMetadata from a JSON string
devices_long_running_operation_metadata_instance = DevicesLongRunningOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(DevicesLongRunningOperationMetadata.to_json())

# convert the object into a dict
devices_long_running_operation_metadata_dict = devices_long_running_operation_metadata_instance.to_dict()
# create an instance of DevicesLongRunningOperationMetadata from a dict
devices_long_running_operation_metadata_from_dict = DevicesLongRunningOperationMetadata.from_dict(devices_long_running_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


