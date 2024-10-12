# LayoutReference

Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout_id** | **str** | Layout ID: the object ID of one of the layouts in the presentation. | [optional] 
**predefined_layout** | **str** | Predefined layout. | [optional] 

## Example

```python
from openapi_client.models.layout_reference import LayoutReference

# TODO update the JSON string below
json = "{}"
# create an instance of LayoutReference from a JSON string
layout_reference_instance = LayoutReference.from_json(json)
# print the JSON string representation of the object
print(LayoutReference.to_json())

# convert the object into a dict
layout_reference_dict = layout_reference_instance.to_dict()
# create an instance of LayoutReference from a dict
layout_reference_from_dict = LayoutReference.from_dict(layout_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


