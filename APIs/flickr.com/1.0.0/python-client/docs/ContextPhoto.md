# ContextPhoto


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**farm** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**is_faved** | **bool** |  | [optional] 
**license** | **int** |  | [optional] 
**media** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**safe** | **bool** |  | [optional] 
**secret** | **str** |  | [optional] 
**server** | **str** |  | [optional] 
**thumb** | **str** |  | [optional] 
**title** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.context_photo import ContextPhoto

# TODO update the JSON string below
json = "{}"
# create an instance of ContextPhoto from a JSON string
context_photo_instance = ContextPhoto.from_json(json)
# print the JSON string representation of the object
print(ContextPhoto.to_json())

# convert the object into a dict
context_photo_dict = context_photo_instance.to_dict()
# create an instance of ContextPhoto from a dict
context_photo_from_dict = ContextPhoto.from_dict(context_photo_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


