# UpdateMetadataArguments

Identifies metadata updates to one device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_id** | **str** | Required. Device ID of the device. | [optional] 
**device_identifier** | [**DeviceIdentifier**](DeviceIdentifier.md) |  | [optional] 
**device_metadata** | [**DeviceMetadata**](DeviceMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_metadata_arguments import UpdateMetadataArguments

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMetadataArguments from a JSON string
update_metadata_arguments_instance = UpdateMetadataArguments.from_json(json)
# print the JSON string representation of the object
print(UpdateMetadataArguments.to_json())

# convert the object into a dict
update_metadata_arguments_dict = update_metadata_arguments_instance.to_dict()
# create an instance of UpdateMetadataArguments from a dict
update_metadata_arguments_from_dict = UpdateMetadataArguments.from_dict(update_metadata_arguments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


