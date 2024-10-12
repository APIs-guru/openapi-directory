# WebpushConfig

[Webpush protocol](https://tools.ietf.org/html/rfc8030) options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **Dict[str, str]** | Arbitrary key/value payload. If present, it will override google.firebase.fcm.v1.Message.data. | [optional] 
**fcm_options** | [**WebpushFcmOptions**](WebpushFcmOptions.md) |  | [optional] 
**headers** | **Dict[str, str]** | HTTP headers defined in webpush protocol. Refer to [Webpush protocol](https://tools.ietf.org/html/rfc8030#section-5) for supported headers, e.g. \&quot;TTL\&quot;: \&quot;15\&quot;. | [optional] 
**notification** | **Dict[str, object]** | Web Notification options as a JSON object. Supports Notification instance properties as defined in [Web Notification API](https://developer.mozilla.org/en-US/docs/Web/API/Notification). If present, \&quot;title\&quot; and \&quot;body\&quot; fields override [google.firebase.fcm.v1.Notification.title] and [google.firebase.fcm.v1.Notification.body]. | [optional] 

## Example

```python
from openapi_client.models.webpush_config import WebpushConfig

# TODO update the JSON string below
json = "{}"
# create an instance of WebpushConfig from a JSON string
webpush_config_instance = WebpushConfig.from_json(json)
# print the JSON string representation of the object
print(WebpushConfig.to_json())

# convert the object into a dict
webpush_config_dict = webpush_config_instance.to_dict()
# create an instance of WebpushConfig from a dict
webpush_config_from_dict = WebpushConfig.from_dict(webpush_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


