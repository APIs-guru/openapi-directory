# ModelProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | &lt;strong&gt;chunkSize&lt;/strong&gt; defines the duration of the time-based audio and video chunks that Wowza Streaming Cloud delivers to the target. &lt;strong&gt;playSSL&lt;/strong&gt; determines whether Wowza Streaming Cloud sends the stream from the target to the player by using SSL (HTTPS). &lt;strong&gt;relativePlaylists&lt;/strong&gt; allows the viewer to watch the stream over HTTP and HTTPS, whichever protocol their browser calls. &lt;strong&gt;sendSSL&lt;/strong&gt; determines whether Wowza Streaming Cloud sends the stream from the transcoder to the target by using SSL (HTTPS). | 
**section** | **str** | The section of the stream target configuration table that contains the property. For &lt;strong&gt;chunkSize&lt;/strong&gt; and &lt;strong&gt;sendSSL&lt;/strong&gt;, use &lt;strong&gt;hls&lt;/strong&gt;. For &lt;strong&gt;playSSL&lt;/strong&gt; and &lt;strong&gt;relativePlaylists&lt;/strong&gt;, use &lt;strong&gt;playlist&lt;/strong&gt;. | 
**value** | **str** | For &lt;strong&gt;chunkSize&lt;/strong&gt; use &lt;strong&gt;2&lt;/strong&gt;, &lt;strong&gt;4&lt;/strong&gt;, &lt;strong&gt;6&lt;/strong&gt;, &lt;strong&gt;8&lt;/strong&gt;, or &lt;strong&gt;10&lt;/strong&gt;. For &lt;strong&gt;playSSL&lt;/strong&gt;, &lt;strong&gt;relativePlaylists&lt;/strong&gt;, and &lt;strong&gt;sendSSL&lt;/strong&gt; use &lt;strong&gt;true&lt;/strong&gt; or &lt;strong&gt;false&lt;/strong&gt;. | 

## Example

```python
from openapi_client.models.model_property import ModelProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ModelProperty from a JSON string
model_property_instance = ModelProperty.from_json(json)
# print the JSON string representation of the object
print(ModelProperty.to_json())

# convert the object into a dict
model_property_dict = model_property_instance.to_dict()
# create an instance of ModelProperty from a dict
model_property_from_dict = ModelProperty.from_dict(model_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


