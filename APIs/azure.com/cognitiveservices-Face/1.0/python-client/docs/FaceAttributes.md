# FaceAttributes

Face Attributes

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessories** | [**List[Accessory]**](Accessory.md) | Properties describing any accessories on a given face. | [optional] 
**age** | **float** | Age in years | [optional] 
**blur** | [**Blur**](Blur.md) |  | [optional] 
**emotion** | [**Emotion**](Emotion.md) |  | [optional] 
**exposure** | [**Exposure**](Exposure.md) |  | [optional] 
**facial_hair** | [**FacialHair**](FacialHair.md) |  | [optional] 
**gender** | **str** | Possible gender of the face. | [optional] 
**glasses** | **str** | Glasses type if any of the face. | [optional] 
**hair** | [**Hair**](Hair.md) |  | [optional] 
**head_pose** | [**HeadPose**](HeadPose.md) |  | [optional] 
**makeup** | [**Makeup**](Makeup.md) |  | [optional] 
**noise** | [**Noise**](Noise.md) |  | [optional] 
**occlusion** | [**Occlusion**](Occlusion.md) |  | [optional] 
**smile** | **float** | A number ranging from 0 to 1 indicating the intensity level associated with a property. | [optional] 

## Example

```python
from openapi_client.models.face_attributes import FaceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of FaceAttributes from a JSON string
face_attributes_instance = FaceAttributes.from_json(json)
# print the JSON string representation of the object
print(FaceAttributes.to_json())

# convert the object into a dict
face_attributes_dict = face_attributes_instance.to_dict()
# create an instance of FaceAttributes from a dict
face_attributes_from_dict = FaceAttributes.from_dict(face_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


