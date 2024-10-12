# LayoutPlaceholderIdMapping

The user-specified ID mapping for a placeholder that will be created on a slide from a specified layout.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**layout_placeholder** | [**Placeholder**](Placeholder.md) |  | [optional] 
**layout_placeholder_object_id** | **str** | The object ID of the placeholder on a layout that will be applied to a slide. | [optional] 
**object_id** | **str** | A user-supplied object ID for the placeholder identified above that to be created onto a slide. If you specify an ID, it must be unique among all pages and page elements in the presentation. The ID must start with an alphanumeric character or an underscore (matches regex &#x60;[a-zA-Z0-9_]&#x60;); remaining characters may include those as well as a hyphen or colon (matches regex &#x60;[a-zA-Z0-9_-:]&#x60;). The length of the ID must not be less than 5 or greater than 50. If you don&#39;t specify an ID, a unique one is generated. | [optional] 

## Example

```python
from openapi_client.models.layout_placeholder_id_mapping import LayoutPlaceholderIdMapping

# TODO update the JSON string below
json = "{}"
# create an instance of LayoutPlaceholderIdMapping from a JSON string
layout_placeholder_id_mapping_instance = LayoutPlaceholderIdMapping.from_json(json)
# print the JSON string representation of the object
print(LayoutPlaceholderIdMapping.to_json())

# convert the object into a dict
layout_placeholder_id_mapping_dict = layout_placeholder_id_mapping_instance.to_dict()
# create an instance of LayoutPlaceholderIdMapping from a dict
layout_placeholder_id_mapping_from_dict = LayoutPlaceholderIdMapping.from_dict(layout_placeholder_id_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


