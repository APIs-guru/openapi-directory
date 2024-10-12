# ImageModuleData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID associated with an image module. This field is here to enable ease of management of image modules. | [optional] 
**main_image** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_module_data import ImageModuleData

# TODO update the JSON string below
json = "{}"
# create an instance of ImageModuleData from a JSON string
image_module_data_instance = ImageModuleData.from_json(json)
# print the JSON string representation of the object
print(ImageModuleData.to_json())

# convert the object into a dict
image_module_data_dict = image_module_data_instance.to_dict()
# create an instance of ImageModuleData from a dict
image_module_data_from_dict = ImageModuleData.from_dict(image_module_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


