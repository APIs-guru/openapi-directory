# Rendering

Instructions for rendering the data

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Description of the data that will help it be interpreted | [optional] 
**rendering_type** | **str** | Rendering Type | [optional] 
**title** | **str** | Title of data | [optional] 

## Example

```python
from openapi_client.models.rendering import Rendering

# TODO update the JSON string below
json = "{}"
# create an instance of Rendering from a JSON string
rendering_instance = Rendering.from_json(json)
# print the JSON string representation of the object
print(Rendering.to_json())

# convert the object into a dict
rendering_dict = rendering_instance.to_dict()
# create an instance of Rendering from a dict
rendering_from_dict = Rendering.from_dict(rendering_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


