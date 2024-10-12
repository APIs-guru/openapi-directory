# AnimationStatic

Display static overlay object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start_time_offset** | **str** | The time to start displaying the overlay object, in seconds. Default: 0 | [optional] 
**xy** | [**NormalizedCoordinate**](NormalizedCoordinate.md) |  | [optional] 

## Example

```python
from openapi_client.models.animation_static import AnimationStatic

# TODO update the JSON string below
json = "{}"
# create an instance of AnimationStatic from a JSON string
animation_static_instance = AnimationStatic.from_json(json)
# print the JSON string representation of the object
print(AnimationStatic.to_json())

# convert the object into a dict
animation_static_dict = animation_static_instance.to_dict()
# create an instance of AnimationStatic from a dict
animation_static_from_dict = AnimationStatic.from_dict(animation_static_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


