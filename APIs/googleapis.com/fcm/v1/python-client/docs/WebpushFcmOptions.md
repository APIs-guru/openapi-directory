# WebpushFcmOptions

Options for features provided by the FCM SDK for Web.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**analytics_label** | **str** | Label associated with the message&#39;s analytics data. | [optional] 
**link** | **str** | The link to open when the user clicks on the notification. For all URL values, HTTPS is required. | [optional] 

## Example

```python
from openapi_client.models.webpush_fcm_options import WebpushFcmOptions

# TODO update the JSON string below
json = "{}"
# create an instance of WebpushFcmOptions from a JSON string
webpush_fcm_options_instance = WebpushFcmOptions.from_json(json)
# print the JSON string representation of the object
print(WebpushFcmOptions.to_json())

# convert the object into a dict
webpush_fcm_options_dict = webpush_fcm_options_instance.to_dict()
# create an instance of WebpushFcmOptions from a dict
webpush_fcm_options_from_dict = WebpushFcmOptions.from_dict(webpush_fcm_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


