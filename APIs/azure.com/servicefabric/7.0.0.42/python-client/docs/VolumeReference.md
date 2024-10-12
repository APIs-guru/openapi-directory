# VolumeReference

Describes a reference to a volume resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_path** | **str** | The path within the container at which the volume should be mounted. Only valid path characters are allowed. | 
**name** | **str** | Name of the volume being referenced. | 
**read_only** | **bool** | The flag indicating whether the volume is read only. Default is &#39;false&#39;. | [optional] 

## Example

```python
from openapi_client.models.volume_reference import VolumeReference

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeReference from a JSON string
volume_reference_instance = VolumeReference.from_json(json)
# print the JSON string representation of the object
print(VolumeReference.to_json())

# convert the object into a dict
volume_reference_dict = volume_reference_instance.to_dict()
# create an instance of VolumeReference from a dict
volume_reference_from_dict = VolumeReference.from_dict(volume_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


