# ResourceSettings

Represents resource specific settings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cores** | **int** | The translated compute cores of the virtual machine | [optional] [readonly] 
**gallery_image_resource_id** | **str** | The resource id of the gallery image used for creating the virtual machine | [optional] 
**id** | **str** | The unique id of the resource setting | [optional] [readonly] 
**image_name** | **str** | The name of the image used to created the environment setting | [optional] [readonly] 
**reference_vm** | [**ReferenceVm**](ReferenceVm.md) |  | 
**size** | **str** | The size of the virtual machine | [optional] 

## Example

```python
from openapi_client.models.resource_settings import ResourceSettings

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSettings from a JSON string
resource_settings_instance = ResourceSettings.from_json(json)
# print the JSON string representation of the object
print(ResourceSettings.to_json())

# convert the object into a dict
resource_settings_dict = resource_settings_instance.to_dict()
# create an instance of ResourceSettings from a dict
resource_settings_from_dict = ResourceSettings.from_dict(resource_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


