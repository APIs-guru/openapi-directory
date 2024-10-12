# Overlay

Overlay configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**animations** | [**List[Animation]**](Animation.md) | List of Animations. The list should be chronological, without any time overlap. | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.overlay import Overlay

# TODO update the JSON string below
json = "{}"
# create an instance of Overlay from a JSON string
overlay_instance = Overlay.from_json(json)
# print the JSON string representation of the object
print(Overlay.to_json())

# convert the object into a dict
overlay_dict = overlay_instance.to_dict()
# create an instance of Overlay from a dict
overlay_from_dict = Overlay.from_dict(overlay_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


