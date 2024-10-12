# UpdateInstanceConfigMetadata

Metadata type for the operation returned by UpdateInstanceConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** | The time at which this operation was cancelled. | [optional] 
**instance_config** | [**InstanceConfig**](InstanceConfig.md) |  | [optional] 
**progress** | [**InstanceOperationProgress**](InstanceOperationProgress.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_instance_config_metadata import UpdateInstanceConfigMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateInstanceConfigMetadata from a JSON string
update_instance_config_metadata_instance = UpdateInstanceConfigMetadata.from_json(json)
# print the JSON string representation of the object
print(UpdateInstanceConfigMetadata.to_json())

# convert the object into a dict
update_instance_config_metadata_dict = update_instance_config_metadata_instance.to_dict()
# create an instance of UpdateInstanceConfigMetadata from a dict
update_instance_config_metadata_from_dict = UpdateInstanceConfigMetadata.from_dict(update_instance_config_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


