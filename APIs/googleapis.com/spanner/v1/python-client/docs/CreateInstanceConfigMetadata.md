# CreateInstanceConfigMetadata

Metadata type for the operation returned by CreateInstanceConfig.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cancel_time** | **str** | The time at which this operation was cancelled. | [optional] 
**instance_config** | [**InstanceConfig**](InstanceConfig.md) |  | [optional] 
**progress** | [**InstanceOperationProgress**](InstanceOperationProgress.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_instance_config_metadata import CreateInstanceConfigMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInstanceConfigMetadata from a JSON string
create_instance_config_metadata_instance = CreateInstanceConfigMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateInstanceConfigMetadata.to_json())

# convert the object into a dict
create_instance_config_metadata_dict = create_instance_config_metadata_instance.to_dict()
# create an instance of CreateInstanceConfigMetadata from a dict
create_instance_config_metadata_from_dict = CreateInstanceConfigMetadata.from_dict(create_instance_config_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


