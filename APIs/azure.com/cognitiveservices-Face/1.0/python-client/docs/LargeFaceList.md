# LargeFaceList

Large face list object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**large_face_list_id** | **str** | LargeFaceListId of the target large face list. | 
**recognition_model** | [**RecognitionModel**](RecognitionModel.md) |  | [optional] [default to RecognitionModel.ENUM_01]
**name** | **str** | User defined name, maximum length is 128. | [optional] 
**user_data** | **str** | User specified data. Length should not exceed 16KB. | [optional] 

## Example

```python
from openapi_client.models.large_face_list import LargeFaceList

# TODO update the JSON string below
json = "{}"
# create an instance of LargeFaceList from a JSON string
large_face_list_instance = LargeFaceList.from_json(json)
# print the JSON string representation of the object
print(LargeFaceList.to_json())

# convert the object into a dict
large_face_list_dict = large_face_list_instance.to_dict()
# create an instance of LargeFaceList from a dict
large_face_list_from_dict = LargeFaceList.from_dict(large_face_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


