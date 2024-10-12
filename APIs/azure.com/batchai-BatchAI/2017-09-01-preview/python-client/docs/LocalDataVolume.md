# LocalDataVolume

Represents mapping of host directories to directories in the container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**host_path** | **str** |  | 
**local_path** | **str** |  | 

## Example

```python
from openapi_client.models.local_data_volume import LocalDataVolume

# TODO update the JSON string below
json = "{}"
# create an instance of LocalDataVolume from a JSON string
local_data_volume_instance = LocalDataVolume.from_json(json)
# print the JSON string representation of the object
print(LocalDataVolume.to_json())

# convert the object into a dict
local_data_volume_dict = local_data_volume_instance.to_dict()
# create an instance of LocalDataVolume from a dict
local_data_volume_from_dict = LocalDataVolume.from_dict(local_data_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


