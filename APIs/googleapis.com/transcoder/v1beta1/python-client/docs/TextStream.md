# TextStream

Encoding of a text stream. For example, closed captions or subtitles.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codec** | **str** | The codec for this text stream. The default is &#x60;\&quot;webvtt\&quot;&#x60;. Supported text codecs: - &#39;srt&#39; - &#39;ttml&#39; - &#39;cea608&#39; - &#39;cea708&#39; - &#39;webvtt&#39; | [optional] 
**language_code** | **str** | Required. The BCP-47 language code, such as &#x60;\&quot;en-US\&quot;&#x60; or &#x60;\&quot;sr-Latn\&quot;&#x60;. For more information, see https://www.unicode.org/reports/tr35/#Unicode_locale_identifier. | [optional] 
**mapping** | [**List[TextAtom]**](TextAtom.md) | The mapping for the &#x60;Job.edit_list&#x60; atoms with text &#x60;EditAtom.inputs&#x60;. | [optional] 

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


