# InputImage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_base64** | **str** |  | [optional] 
**id_pic** | **str** |  | [optional] 
**svg_anim** | **str** |  | [optional] 
**url_source** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.input_image import InputImage

# TODO update the JSON string below
json = "{}"
# create an instance of InputImage from a JSON string
input_image_instance = InputImage.from_json(json)
# print the JSON string representation of the object
print(InputImage.to_json())

# convert the object into a dict
input_image_dict = input_image_instance.to_dict()
# create an instance of InputImage from a dict
input_image_from_dict = InputImage.from_dict(input_image_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


