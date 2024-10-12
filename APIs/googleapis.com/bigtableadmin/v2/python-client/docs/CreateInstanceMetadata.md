# CreateInstanceMetadata

The metadata for the Operation returned by CreateInstance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finish_time** | **str** | The time at which the operation failed or was completed successfully. | [optional] 
**original_request** | [**CreateInstanceRequest**](CreateInstanceRequest.md) |  | [optional] 
**request_time** | **str** | The time at which the original request was received. | [optional] 

## Example

```python
from openapi_client.models.create_instance_metadata import CreateInstanceMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInstanceMetadata from a JSON string
create_instance_metadata_instance = CreateInstanceMetadata.from_json(json)
# print the JSON string representation of the object
print(CreateInstanceMetadata.to_json())

# convert the object into a dict
create_instance_metadata_dict = create_instance_metadata_instance.to_dict()
# create an instance of CreateInstanceMetadata from a dict
create_instance_metadata_from_dict = CreateInstanceMetadata.from_dict(create_instance_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


