# VolumeResourceProperties

Describes properties of a volume resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | State of the resource. | [optional] [readonly] 
**azure_file_parameters** | [**VolumeProviderParametersAzureFile**](VolumeProviderParametersAzureFile.md) |  | [optional] 
**description** | **str** | User readable description of the volume. | [optional] 
**provider** | **str** | Provider of the volume. | 

## Example

```python
from openapi_client.models.volume_resource_properties import VolumeResourceProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeResourceProperties from a JSON string
volume_resource_properties_instance = VolumeResourceProperties.from_json(json)
# print the JSON string representation of the object
print(VolumeResourceProperties.to_json())

# convert the object into a dict
volume_resource_properties_dict = volume_resource_properties_instance.to_dict()
# create an instance of VolumeResourceProperties from a dict
volume_resource_properties_from_dict = VolumeResourceProperties.from_dict(volume_resource_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


