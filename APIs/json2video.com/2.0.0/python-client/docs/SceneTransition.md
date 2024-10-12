# SceneTransition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **float** | Duration of the transition in seconds | [optional] 
**style** | **str** |  | [optional] [default to 'fade']
**type** | **str** |  | [optional] [default to 'xfade']

## Example

```python
from openapi_client.models.scene_transition import SceneTransition

# TODO update the JSON string below
json = "{}"
# create an instance of SceneTransition from a JSON string
scene_transition_instance = SceneTransition.from_json(json)
# print the JSON string representation of the object
print(SceneTransition.to_json())

# convert the object into a dict
scene_transition_dict = scene_transition_instance.to_dict()
# create an instance of SceneTransition from a dict
scene_transition_from_dict = SceneTransition.from_dict(scene_transition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


