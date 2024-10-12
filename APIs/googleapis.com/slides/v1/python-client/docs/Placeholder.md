# Placeholder

The placeholder information that uniquely identifies a placeholder shape.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**index** | **int** | The index of the placeholder. If the same placeholder types are present in the same page, they would have different index values. | [optional] 
**parent_object_id** | **str** | The object ID of this shape&#39;s parent placeholder. If unset, the parent placeholder shape does not exist, so the shape does not inherit properties from any other shape. | [optional] 
**type** | **str** | The type of the placeholder. | [optional] 

## Example

```python
from openapi_client.models.placeholder import Placeholder

# TODO update the JSON string below
json = "{}"
# create an instance of Placeholder from a JSON string
placeholder_instance = Placeholder.from_json(json)
# print the JSON string representation of the object
print(Placeholder.to_json())

# convert the object into a dict
placeholder_dict = placeholder_instance.to_dict()
# create an instance of Placeholder from a dict
placeholder_from_dict = Placeholder.from_dict(placeholder_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


