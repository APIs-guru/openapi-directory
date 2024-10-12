# StreamingConfig

The config for streaming-based notifications, which send each event as soon as it is detected.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | Expression that defines the filter to apply across create/update events of assets or findings as specified by the event type. The expression is a list of zero or more restrictions combined via logical operators &#x60;AND&#x60; and &#x60;OR&#x60;. Parentheses are supported, and &#x60;OR&#x60; has higher precedence than &#x60;AND&#x60;. Restrictions have the form &#x60; &#x60; and may have a &#x60;-&#x60; character in front of them to indicate negation. The fields map to those defined in the corresponding resource. The supported operators are: * &#x60;&#x3D;&#x60; for all value types. * &#x60;&gt;&#x60;, &#x60;&lt;&#x60;, &#x60;&gt;&#x3D;&#x60;, &#x60;&lt;&#x3D;&#x60; for integer values. * &#x60;:&#x60;, meaning substring matching, for strings. The supported value types are: * string literals in quotes. * integer literals without quotes. * boolean literals &#x60;true&#x60; and &#x60;false&#x60; without quotes. | [optional] 

## Example

```python
from openapi_client.models.streaming_config import StreamingConfig

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingConfig from a JSON string
streaming_config_instance = StreamingConfig.from_json(json)
# print the JSON string representation of the object
print(StreamingConfig.to_json())

# convert the object into a dict
streaming_config_dict = streaming_config_instance.to_dict()
# create an instance of StreamingConfig from a dict
streaming_config_from_dict = StreamingConfig.from_dict(streaming_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


