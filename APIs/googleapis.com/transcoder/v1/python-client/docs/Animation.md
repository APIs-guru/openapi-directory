# Animation

Animation types.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animation_end** | [**AnimationEnd**](AnimationEnd.md) |  | [optional] 
**animation_fade** | [**AnimationFade**](AnimationFade.md) |  | [optional] 
**animation_static** | [**AnimationStatic**](AnimationStatic.md) |  | [optional] 

## Example

```python
from openapi_client.models.animation import Animation

# TODO update the JSON string below
json = "{}"
# create an instance of Animation from a JSON string
animation_instance = Animation.from_json(json)
# print the JSON string representation of the object
print(Animation.to_json())

# convert the object into a dict
animation_dict = animation_instance.to_dict()
# create an instance of Animation from a dict
animation_from_dict = Animation.from_dict(animation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


