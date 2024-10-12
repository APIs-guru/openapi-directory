# VisualElementRotate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**angle** | **float** | Sets the angle of rotation | [default to 0]
**speed** | **float** | Sets the time it takes to rotate the provided angle. A zero value means no movement | [optional] [default to 0]

## Example

```python
from openapi_client.models.visual_element_rotate import VisualElementRotate

# TODO update the JSON string below
json = "{}"
# create an instance of VisualElementRotate from a JSON string
visual_element_rotate_instance = VisualElementRotate.from_json(json)
# print the JSON string representation of the object
print(VisualElementRotate.to_json())

# convert the object into a dict
visual_element_rotate_dict = visual_element_rotate_instance.to_dict()
# create an instance of VisualElementRotate from a dict
visual_element_rotate_from_dict = VisualElementRotate.from_dict(visual_element_rotate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


