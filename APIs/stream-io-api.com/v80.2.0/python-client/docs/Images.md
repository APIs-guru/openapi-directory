# Images


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fixed_height** | [**ImageData**](ImageData.md) |  | 
**fixed_height_downsampled** | [**ImageData**](ImageData.md) |  | 
**fixed_height_still** | [**ImageData**](ImageData.md) |  | 
**fixed_width** | [**ImageData**](ImageData.md) |  | 
**fixed_width_downsampled** | [**ImageData**](ImageData.md) |  | 
**fixed_width_still** | [**ImageData**](ImageData.md) |  | 
**original** | [**ImageData**](ImageData.md) |  | 

## Example

```python
from openapi_client.models.images import Images

# TODO update the JSON string below
json = "{}"
# create an instance of Images from a JSON string
images_instance = Images.from_json(json)
# print the JSON string representation of the object
print(Images.to_json())

# convert the object into a dict
images_dict = images_instance.to_dict()
# create an instance of Images from a dict
images_from_dict = Images.from_dict(images_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


