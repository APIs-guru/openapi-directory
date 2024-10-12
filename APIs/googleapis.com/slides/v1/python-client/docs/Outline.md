# Outline

The outline of a PageElement. If these fields are unset, they may be inherited from a parent placeholder if it exists. If there is no parent, the fields will default to the value used for new page elements created in the Slides editor, which may depend on the page element kind.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dash_style** | **str** | The dash style of the outline. | [optional] 
**outline_fill** | [**OutlineFill**](OutlineFill.md) |  | [optional] 
**property_state** | **str** | The outline property state. Updating the outline on a page element will implicitly update this field to &#x60;RENDERED&#x60;, unless another value is specified in the same request. To have no outline on a page element, set this field to &#x60;NOT_RENDERED&#x60;. In this case, any other outline fields set in the same request will be ignored. | [optional] 
**weight** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.outline import Outline

# TODO update the JSON string below
json = "{}"
# create an instance of Outline from a JSON string
outline_instance = Outline.from_json(json)
# print the JSON string representation of the object
print(Outline.to_json())

# convert the object into a dict
outline_dict = outline_instance.to_dict()
# create an instance of Outline from a dict
outline_from_dict = Outline.from_dict(outline_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


