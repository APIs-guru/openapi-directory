# VisualElementScale


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **int** | Sets the height for scaling the element | [optional] [default to -1]
**width** | **int** | Sets the width for scaling the element | [optional] [default to -1]

## Example

```python
from openapi_client.models.visual_element_scale import VisualElementScale

# TODO update the JSON string below
json = "{}"
# create an instance of VisualElementScale from a JSON string
visual_element_scale_instance = VisualElementScale.from_json(json)
# print the JSON string representation of the object
print(VisualElementScale.to_json())

# convert the object into a dict
visual_element_scale_dict = visual_element_scale_instance.to_dict()
# create an instance of VisualElementScale from a dict
visual_element_scale_from_dict = VisualElementScale.from_dict(visual_element_scale_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


