# PagespeedApiFormatStringV2


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | [**List[PagespeedApiFormatStringV2ArgsInner]**](PagespeedApiFormatStringV2ArgsInner.md) | List of arguments for the format string. | [optional] 
**format** | **str** | A localized format string with {{FOO}} placeholders, where &#39;FOO&#39; is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key &#39;FOO&#39;. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_format_string_v2 import PagespeedApiFormatStringV2

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiFormatStringV2 from a JSON string
pagespeed_api_format_string_v2_instance = PagespeedApiFormatStringV2.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiFormatStringV2.to_json())

# convert the object into a dict
pagespeed_api_format_string_v2_dict = pagespeed_api_format_string_v2_instance.to_dict()
# create an instance of PagespeedApiFormatStringV2 from a dict
pagespeed_api_format_string_v2_from_dict = PagespeedApiFormatStringV2.from_dict(pagespeed_api_format_string_v2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


