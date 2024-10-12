# UpdateInstanceMetadata

Metadata type for the operation returned by UpdateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** | The time at which this operation was cancelled. If set, this operation is in the process of undoing itself (which is guaranteed to succeed) and cannot be cancelled again. | [optional] 
**end_time** | **str** | The time at which this operation failed or was completed successfully. | [optional] 
**expected_fulfillment_period** | **str** | The expected fulfillment period of this update operation. | [optional] 
**instance** | [**Instance**](Instance.md) |  | [optional] 
**start_time** | **str** | The time at which UpdateInstance request was received. | [optional] 

## Example

```python
from openapi_client.models.update_instance_metadata import UpdateInstanceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstanceMetadata from a JSON string
update_instance_metadata_instance = UpdateInstanceMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateInstanceMetadata.to_json())

# convert the object into a dict
update_instance_metadata_dict = update_instance_metadata_instance.to_dict()
# create an instance of UpdateInstanceMetadata from a dict
update_instance_metadata_from_dict = UpdateInstanceMetadata.from_dict(update_instance_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


