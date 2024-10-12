# PagespeedApiFormatStringV4


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**args** | [**List[PagespeedApiFormatStringV4ArgsInner]**](PagespeedApiFormatStringV4ArgsInner.md) | List of arguments for the format string. | [optional] 
**format** | **str** | A localized format string with {{FOO}} placeholders, where &#39;FOO&#39; is the key of the argument whose value should be substituted. For HYPERLINK arguments, the format string will instead contain {{BEGIN_FOO}} and {{END_FOO}} for the argument with key &#39;FOO&#39;. | [optional] 

## Example

```python
from openapi_client.models.pagespeed_api_format_string_v4 import PagespeedApiFormatStringV4

# TODO update the JSON string below
json = "{}"
# create an instance of PagespeedApiFormatStringV4 from a JSON string
pagespeed_api_format_string_v4_instance = PagespeedApiFormatStringV4.from_json(json)
# print the JSON string representation of the object
print(PagespeedApiFormatStringV4.to_json())

# convert the object into a dict
pagespeed_api_format_string_v4_dict = pagespeed_api_format_string_v4_instance.to_dict()
# create an instance of PagespeedApiFormatStringV4 from a dict
pagespeed_api_format_string_v4_from_dict = PagespeedApiFormatStringV4.from_dict(pagespeed_api_format_string_v4_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


