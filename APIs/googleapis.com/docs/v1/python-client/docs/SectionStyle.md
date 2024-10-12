# SectionStyle

The styling that applies to a section.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_properties** | [**List[SectionColumnProperties]**](SectionColumnProperties.md) | The section&#39;s columns properties. If empty, the section contains one column with the default properties in the Docs editor. A section can be updated to have no more than 3 columns. When updating this property, setting a concrete value is required. Unsetting this property will result in a 400 bad request error. | [optional] 
**column_separator_style** | **str** | The style of column separators. This style can be set even when there&#39;s one column in the section. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. | [optional] 
**content_direction** | **str** | The content direction of this section. If unset, the value defaults to LEFT_TO_RIGHT. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. | [optional] 
**default_footer_id** | **str** | The ID of the default footer. If unset, the value inherits from the previous SectionBreak&#39;s SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle&#39;s default_footer_id. This property is read-only. | [optional] 
**default_header_id** | **str** | The ID of the default header. If unset, the value inherits from the previous SectionBreak&#39;s SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle&#39;s default_header_id. This property is read-only. | [optional] 
**even_page_footer_id** | **str** | The ID of the footer used only for even pages. If the value of DocumentStyle&#39;s use_even_page_header_footer is true, this value is used for the footers on even pages in the section. If it is false, the footers on even pages use the default_footer_id. If unset, the value inherits from the previous SectionBreak&#39;s SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle&#39;s even_page_footer_id. This property is read-only. | [optional] 
**even_page_header_id** | **str** | The ID of the header used only for even pages. If the value of DocumentStyle&#39;s use_even_page_header_footer is true, this value is used for the headers on even pages in the section. If it is false, the headers on even pages use the default_header_id. If unset, the value inherits from the previous SectionBreak&#39;s SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle&#39;s even_page_header_id. This property is read-only. | [optional] 
**first_page_footer_id** | **str** | The ID of the footer used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the footer on the first page of the section. If it&#39;s false, the footer on the first page of the section uses the default_footer_id. If unset, the value inherits from the previous SectionBreak&#39;s SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle&#39;s first_page_footer_id. This property is read-only. | [optional] 
**first_page_header_id** | **str** | The ID of the header used only for the first page of the section. If use_first_page_header_footer is true, this value is used for the header on the first page of the section. If it&#39;s false, the header on the first page of the section uses the default_header_id. If unset, the value inherits from the previous SectionBreak&#39;s SectionStyle. If the value is unset in the first SectionBreak, it inherits from DocumentStyle&#39;s first_page_header_id. This property is read-only. | [optional] 
**flip_page_orientation** | **bool** | Optional. Indicates whether to flip the dimensions of DocumentStyle&#39;s page_size for this section, which allows changing the page orientation between portrait and landscape. If unset, the value inherits from DocumentStyle&#39;s flip_page_orientation. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. | [optional] 
**margin_bottom** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_footer** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_header** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_left** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_right** | [**Dimension**](Dimension.md) |  | [optional] 
**margin_top** | [**Dimension**](Dimension.md) |  | [optional] 
**page_number_start** | **int** | The page number from which to start counting the number of pages for this section. If unset, page numbering continues from the previous section. If the value is unset in the first SectionBreak, refer to DocumentStyle&#39;s page_number_start. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. | [optional] 
**section_type** | **str** | Output only. The type of section. | [optional] 
**use_first_page_header_footer** | **bool** | Indicates whether to use the first page header / footer IDs for the first page of the section. If unset, it inherits from DocumentStyle&#39;s use_first_page_header_footer for the first section. If the value is unset for subsequent sectors, it should be interpreted as false. When updating this property, setting a concrete value is required. Unsetting this property results in a 400 bad request error. | [optional] 

## Example

```python
from openapi_client.models.section_style import SectionStyle

# TODO update the JSON string below
json = "{}"
# create an instance of SectionStyle from a JSON string
section_style_instance = SectionStyle.from_json(json)
# print the JSON string representation of the object
print(SectionStyle.to_json())

# convert the object into a dict
section_style_dict = section_style_instance.to_dict()
# create an instance of SectionStyle from a dict
section_style_from_dict = SectionStyle.from_dict(section_style_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


