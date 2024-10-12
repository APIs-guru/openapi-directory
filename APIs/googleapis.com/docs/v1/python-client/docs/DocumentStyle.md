# DocumentStyle

The style of the document.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**background** | [**Background**](Background.md) |  | [optional] 
**default_footer_id** | **str** | The ID of the default footer. If not set, there&#39;s no default footer. This property is read-only. | [optional] 
**default_header_id** | **str** | The ID of the default header. If not set, there&#39;s no default header. This property is read-only. | [optional] 
**even_page_footer_id** | **str** | The ID of the footer used only for even pages. The value of use_even_page_header_footer determines whether to use the default_footer_id or this value for the footer on even pages. If not set, there&#39;s no even page footer. This property is read-only. | [optional] 
**even_page_header_id** | **str** | The ID of the header used only for even pages. The value of use_even_page_header_footer determines whether to use the default_header_id or this value for the header on even pages. If not set, there&#39;s no even page header. This property is read-only. | [optional] 
**first_page_footer_id** | **str** | The ID of the footer used only for the first page. If not set then a unique footer for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_footer_id or this value for the footer on the first page. If not set, there&#39;s no first page footer. This property is read-only. | [optional] 
**first_page_header_id** | **str** | The ID of the header used only for the first page. If not set then a unique header for the first page does not exist. The value of use_first_page_header_footer determines whether to use the default_header_id or this value for the header on the first page. If not set, there&#39;s no first page header. This property is read-only. | [optional] 
**flip_page_orientation** | **bool** | Optional. Indicates whether to flip the dimensions of the page_size, which allows changing the page orientation between portrait and landscape. | [optional] 
**margin_bottom** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_footer** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_header** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_left** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_right** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_top** | [**Dimension**](Dimension.md) |  | [optional] 
**page_number_start** | **int** | The page number from which to start counting the number of pages. | [optional] 
**page_size** | [**Size**](Size.md) |  | [optional] 
**use_custom_header_footer_margins** | **bool** | Indicates whether DocumentStyle margin_header, SectionStyle margin_header and DocumentStyle margin_footer, SectionStyle margin_footer are respected. When false, the default values in the Docs editor for header and footer margin are used. This property is read-only. | [optional] 
**use_even_page_header_footer** | **bool** | Indicates whether to use the even page header / footer IDs for the even pages. | [optional] 
**use_first_page_header_footer** | **bool** | Indicates whether to use the first page header / footer IDs for the first page. | [optional] 

## Example

```python
from openapi_client.models.document_style import DocumentStyle

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentStyle from a JSON string
document_style_instance = DocumentStyle.from_json(json)
# print the JSON string representation of the object
print(DocumentStyle.to_json())

# convert the object into a dict
document_style_dict = document_style_instance.to_dict()
# create an instance of DocumentStyle from a dict
document_style_from_dict = DocumentStyle.from_dict(document_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


