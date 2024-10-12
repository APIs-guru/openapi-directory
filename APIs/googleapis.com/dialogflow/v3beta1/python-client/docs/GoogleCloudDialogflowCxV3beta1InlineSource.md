# GoogleCloudDialogflowCxV3beta1InlineSource

Inline source for a Dialogflow operation that reads or imports objects (e.g. intents) into Dialogflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | The uncompressed byte content for the objects. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_inline_source import GoogleCloudDialogflowCxV3beta1InlineSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1InlineSource from a JSON string
google_cloud_dialogflow_cx_v3beta1_inline_source_instance = GoogleCloudDialogflowCxV3beta1InlineSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1InlineSource.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_inline_source_dict = google_cloud_dialogflow_cx_v3beta1_inline_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1InlineSource from a dict
google_cloud_dialogflow_cx_v3beta1_inline_source_from_dict = GoogleCloudDialogflowCxV3beta1InlineSource.from_dict(google_cloud_dialogflow_cx_v3beta1_inline_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


