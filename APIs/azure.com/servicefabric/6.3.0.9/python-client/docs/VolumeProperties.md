# VolumeProperties

This type describes properties of a volume resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_file_parameters** | [**VolumeProviderParametersAzureFile**](VolumeProviderParametersAzureFile.md) |  | [optional] 
**description** | **str** | User readable description of the volume. | [optional] 
**provider** | **str** | Provider of the volume. | 

## Example

```python
from openapi_client.models.volume_properties import VolumeProperties

# TODO update the JSON string below
json = "{}"
# create an instance of VolumeProperties from a JSON string
volume_properties_instance = VolumeProperties.from_json(json)
# print the JSON string representation of the object
print(VolumeProperties.to_json())

# convert the object into a dict
volume_properties_dict = volume_properties_instance.to_dict()
# create an instance of VolumeProperties from a dict
volume_properties_from_dict = VolumeProperties.from_dict(volume_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


