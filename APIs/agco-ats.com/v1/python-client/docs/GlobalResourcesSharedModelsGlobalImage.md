# GlobalResourcesSharedModelsGlobalImage

An image from the Global Image library.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crc** | **str** | The Hash of the file (SHA256, HEX-encoded). | 
**categories** | [**List[GlobalResourcesSharedModelsGlobalImageCategory]**](GlobalResourcesSharedModelsGlobalImageCategory.md) | The category of the file. | [optional] 
**var_date** | **datetime** | The date of the file. | [optional] 
**description** | **str** | The description of the file. | 
**height** | **int** | The height of the file. | 
**id** | **str** | The Id of the GlobalImage Metadata. | [optional] 
**name** | **str** | The name of the file when downloaded. | 
**publisher** | **str** | The Publisher of the file. | [optional] 
**size** | **int** | The size of the file in bytes. Null until assigned by server when marked as &#39;Available&#39;. Read Only | [optional] 
**state** | **str** | Indicates the state of this file. Must be &#39;Created&#39; when created. Read Only. | 
**thumbnail_crc** | **str** | The Hash of the thumbnail file (SHA256, HEX-encoded). | 
**thumbnail_size** | **int** | The size of the thumbnail file in bytes. Null until assigned by server when marked as &#39;Available&#39;. Read Only | [optional] 
**width** | **int** | The width of the file. | 

## Example

```python
from openapi_client.models.global_resources_shared_models_global_image import GlobalResourcesSharedModelsGlobalImage

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalResourcesSharedModelsGlobalImage from a JSON string
global_resources_shared_models_global_image_instance = GlobalResourcesSharedModelsGlobalImage.from_json(json)
# print the JSON string representation of the object
print(GlobalResourcesSharedModelsGlobalImage.to_json())

# convert the object into a dict
global_resources_shared_models_global_image_dict = global_resources_shared_models_global_image_instance.to_dict()
# create an instance of GlobalResourcesSharedModelsGlobalImage from a dict
global_resources_shared_models_global_image_from_dict = GlobalResourcesSharedModelsGlobalImage.from_dict(global_resources_shared_models_global_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


