# PagespeedApiFormatStringV4ArgsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The placeholder key for this arg, as a string. | [optional] 
**rects** | [**List[PagespeedApiFormatStringV4ArgsInnerRectsInner]**](PagespeedApiFormatStringV4ArgsInnerRectsInner.md) | The screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. If this is absent for a SNAPSHOT_RECT argument, it means that that argument refers to the entire snapshot. | [optional] 
**secondary_rects** | [**List[PagespeedApiFormatStringV4ArgsInnerRectsInner]**](PagespeedApiFormatStringV4ArgsInnerRectsInner.md) | Secondary screen rectangles being referred to, with dimensions measured in CSS pixels. This is only ever used for SNAPSHOT_RECT arguments. | [optional] 
**type** | **str** | Type of argument. One of URL, STRING_LITERAL, INT_LITERAL, BYTES, DURATION, VERBATIM_STRING, PERCENTAGE, HYPERLINK, or SNAPSHOT_RECT. | [optional] 
**value** | **str** | Argument value, as a localized string. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_format_string_v4_args_inner import PagespeedApiFormatStringV4ArgsInner

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiFormatStringV4ArgsInner from a JSON string
pagespeed_api_format_string_v4_args_inner_instance = PagespeedApiFormatStringV4ArgsInner.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiFormatStringV4ArgsInner.to_json())

# convert the object into a dict
pagespeed_api_format_string_v4_args_inner_dict = pagespeed_api_format_string_v4_args_inner_instance.to_dict()
# create an instance of PagespeedApiFormatStringV4ArgsInner from a dict
pagespeed_api_format_string_v4_args_inner_from_dict = PagespeedApiFormatStringV4ArgsInner.from_dict(pagespeed_api_format_string_v4_args_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


