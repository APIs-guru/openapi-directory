# VolumeResourceDescription

Describes a service fabric volume resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Volume resource name. | 
**properties** | [**VolumeProperties**](VolumeProperties.md) |  | 

## Example

```python
from openapi_client.models.volume_resource_description import VolumeResourceDescription

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeResourceDescription from a JSON string
volume_resource_description_instance = VolumeResourceDescription.from_json(json)
# print the JSON string representation of the object
print(VolumeResourceDescription.to_json())

# convert the object into a dict
volume_resource_description_dict = volume_resource_description_instance.to_dict()
# create an instance of VolumeResourceDescription from a dict
volume_resource_description_from_dict = VolumeResourceDescription.from_dict(volume_resource_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


