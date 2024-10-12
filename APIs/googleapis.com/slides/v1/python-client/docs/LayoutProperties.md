# LayoutProperties

The properties of Page are only relevant for pages with page_type LAYOUT.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The human-readable name of the layout. | [optional] 
**master_object_id** | **str** | The object ID of the master that this layout is based on. | [optional] 
**name** | **str** | The name of the layout. | [optional] 

## Example

```python
from openapi_client.models.layout_properties import LayoutProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LayoutProperties from a JSON string
layout_properties_instance = LayoutProperties.from_json(json)
# print the JSON string representation of the object
print(LayoutProperties.to_json())

# convert the object into a dict
layout_properties_dict = layout_properties_instance.to_dict()
# create an instance of LayoutProperties from a dict
layout_properties_from_dict = LayoutProperties.from_dict(layout_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


