# DesignerTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**components** | **List[object]** |  | 
**created_at** | **datetime** |  | [optional] 
**css** | **str** |  | 
**footer_html** | **str** |  | [optional] 
**format** | [**Format**](Format.md) |  | 
**header_html** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**margin** | [**Margin**](Margin.md) |  | 
**name** | **str** |  | 
**orientation** | [**Orientation**](Orientation.md) |  | 
**preview_payload** | **object** |  | 
**template_html** | **str** |  | 

## Example

```python
from openapi_client.models.designer_template import DesignerTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of DesignerTemplate from a JSON string
designer_template_instance = DesignerTemplate.from_json(json)
# print the JSON string representation of the object
print(DesignerTemplate.to_json())

# convert the object into a dict
designer_template_dict = designer_template_instance.to_dict()
# create an instance of DesignerTemplate from a dict
designer_template_from_dict = DesignerTemplate.from_dict(designer_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


