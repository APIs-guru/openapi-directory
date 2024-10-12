# ApplicationScopedVolume

Describes a volume whose lifetime is scoped to the application's lifetime.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_parameters** | [**ApplicationScopedVolumeCreationParameters**](ApplicationScopedVolumeCreationParameters.md) |  | 
**destination_path** | **str** | The path within the container at which the volume should be mounted. Only valid path characters are allowed. | 
**name** | **str** | Name of the volume being referenced. | 
**read_only** | **bool** | The flag indicating whether the volume is read only. Default is &#39;false&#39;. | [optional] 

## Example

```python
from openapi_client.models.application_scoped_volume import ApplicationScopedVolume

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationScopedVolume from a JSON string
application_scoped_volume_instance = ApplicationScopedVolume.from_json(json)
# print the JSON string representation of the object
print(ApplicationScopedVolume.to_json())

# convert the object into a dict
application_scoped_volume_dict = application_scoped_volume_instance.to_dict()
# create an instance of ApplicationScopedVolume from a dict
application_scoped_volume_from_dict = ApplicationScopedVolume.from_dict(application_scoped_volume_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


