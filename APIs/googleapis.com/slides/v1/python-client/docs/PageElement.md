# PageElement

A visual element rendered on a page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the page element. Combined with title to display alt text. The field is not supported for Group elements. | [optional] 
**element_group** | [**Group**](Group.md) |  | [optional] 
**image** | [**Image**](Image.md) |  | [optional] 
**line** | [**Line**](Line.md) |  | [optional] 
**object_id** | **str** | The object ID for this page element. Object IDs used by google.apps.slides.v1.Page and google.apps.slides.v1.PageElement share the same namespace. | [optional] 
**shape** | [**Shape**](Shape.md) |  | [optional] 
**sheets_chart** | [**SheetsChart**](SheetsChart.md) |  | [optional] 
**size** | [**Size**](Size.md) |  | [optional] 
**table** | [**Table**](Table.md) |  | [optional] 
**title** | **str** | The title of the page element. Combined with description to display alt text. The field is not supported for Group elements. | [optional] 
**transform** | [**AffineTransform**](AffineTransform.md) |  | [optional] 
**video** | [**Video**](Video.md) |  | [optional] 
**word_art** | [**WordArt**](WordArt.md) |  | [optional] 

## Example

```python
from openapi_client.models.page_element import PageElement

# TODO update the JSON string below
json = "{}"
# create an instance of PageElement from a JSON string
page_element_instance = PageElement.from_json(json)
# print the JSON string representation of the object
print(PageElement.to_json())

# convert the object into a dict
page_element_dict = page_element_instance.to_dict()
# create an instance of PageElement from a dict
page_element_from_dict = PageElement.from_dict(page_element_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


