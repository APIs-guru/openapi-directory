# ApplicationScopedVolumeCreationParameters

Describes parameters for creating application-scoped volumes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | User readable description of the volume. | [optional] 
**kind** | [**ApplicationScopedVolumeKind**](ApplicationScopedVolumeKind.md) |  | 

## Example

```python
from openapi_client.models.application_scoped_volume_creation_parameters import ApplicationScopedVolumeCreationParameters

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationScopedVolumeCreationParameters from a JSON string
application_scoped_volume_creation_parameters_instance = ApplicationScopedVolumeCreationParameters.from_json(json)
# print the JSON string representation of the object
print(ApplicationScopedVolumeCreationParameters.to_json())

# convert the object into a dict
application_scoped_volume_creation_parameters_dict = application_scoped_volume_creation_parameters_instance.to_dict()
# create an instance of ApplicationScopedVolumeCreationParameters from a dict
application_scoped_volume_creation_parameters_from_dict = ApplicationScopedVolumeCreationParameters.from_dict(application_scoped_volume_creation_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


