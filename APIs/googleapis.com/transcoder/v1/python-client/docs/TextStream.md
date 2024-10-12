# TextStream

Encoding of a text stream. For example, closed captions or subtitles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codec** | **str** | The codec for this text stream. The default is &#x60;webvtt&#x60;. Supported text codecs: - &#x60;srt&#x60; - &#x60;ttml&#x60; - &#x60;cea608&#x60; - &#x60;cea708&#x60; - &#x60;webvtt&#x60; | [optional] 
**display_name** | **str** | The name for this particular text stream that will be added to the HLS/DASH manifest. Not supported in MP4 files. | [optional] 
**language_code** | **str** | The BCP-47 language code, such as &#x60;en-US&#x60; or &#x60;sr-Latn&#x60;. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. Not supported in MP4 files. | [optional] 
**mapping** | [**List[TextMapping]**](TextMapping.md) | The mapping for the JobConfig.edit_list atoms with text EditAtom.inputs. | [optional] 

## Example

```python
from openapi_client.models.text_stream import TextStream

# TODO update the JSON string below
json = "{}"
# create an instance of TextStream from a JSON string
text_stream_instance = TextStream.from_json(json)
# print the JSON string representation of the object
print(TextStream.to_json())

# convert the object into a dict
text_stream_dict = text_stream_instance.to_dict()
# create an instance of TextStream from a dict
text_stream_from_dict = TextStream.from_dict(text_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


