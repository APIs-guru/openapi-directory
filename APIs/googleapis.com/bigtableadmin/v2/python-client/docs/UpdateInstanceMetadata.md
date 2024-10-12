# UpdateInstanceMetadata

The metadata for the Operation returned by UpdateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_time** | **str** | The time at which the operation failed or was completed successfully. | [optional] 
**original_request** | [**PartialUpdateInstanceRequest**](PartialUpdateInstanceRequest.md) |  | [optional] 
**request_time** | **str** | The time at which the original request was received. | [optional] 

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


