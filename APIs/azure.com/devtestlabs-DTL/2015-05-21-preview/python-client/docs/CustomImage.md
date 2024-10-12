# CustomImage

A custom image.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the resource. | [optional] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] 
**properties** | [**CustomImageProperties**](CustomImageProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] 

## Example

```python
from openapi_client.models.custom_image import CustomImage

# TODO update the JSON string below
json = "{}"
# create an instance of CustomImage from a JSON string
custom_image_instance = CustomImage.from_json(json)
# print the JSON string representation of the object
print(CustomImage.to_json())

# convert the object into a dict
custom_image_dict = custom_image_instance.to_dict()
# create an instance of CustomImage from a dict
custom_image_from_dict = CustomImage.from_dict(custom_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


