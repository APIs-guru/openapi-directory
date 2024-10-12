# CelebritiesModel

An object describing possible celebrity identification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **float** | Level of confidence ranging from 0 to 1. | [optional] 
**face_rectangle** | [**FaceRectangle**](FaceRectangle.md) |  | [optional] 
**name** | **str** | Name of the celebrity. | [optional] 

## Example

```python
from openapi_client.models.celebrities_model import CelebritiesModel

# TODO update the JSON string below
json = "{}"
# create an instance of CelebritiesModel from a JSON string
celebrities_model_instance = CelebritiesModel.from_json(json)
# print the JSON string representation of the object
print(CelebritiesModel.to_json())

# convert the object into a dict
celebrities_model_dict = celebrities_model_instance.to_dict()
# create an instance of CelebritiesModel from a dict
celebrities_model_from_dict = CelebritiesModel.from_dict(celebrities_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


