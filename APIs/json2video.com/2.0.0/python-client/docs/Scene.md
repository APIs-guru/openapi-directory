# Scene


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background_color** | **str** | A hexadecimal representation of a color or &#39;transparent&#39; | [optional] [default to '#000000']
**cache** | **bool** |  | [optional] [default to True]
**comment** | **str** | Used for adding your comments | [optional] 
**duration** | **float** |  | [optional] [default to -1]
**elements** | [**List[SceneElementsInner]**](SceneElementsInner.md) |  | [optional] 
**transition** | [**SceneTransition**](SceneTransition.md) |  | [optional] 

## Example

```python
from openapi_client.models.scene import Scene

# TODO update the JSON string below
json = "{}"
# create an instance of Scene from a JSON string
scene_instance = Scene.from_json(json)
# print the JSON string representation of the object
print(Scene.to_json())

# convert the object into a dict
scene_dict = scene_instance.to_dict()
# create an instance of Scene from a dict
scene_from_dict = Scene.from_dict(scene_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


