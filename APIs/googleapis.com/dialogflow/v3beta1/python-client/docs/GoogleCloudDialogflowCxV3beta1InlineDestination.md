# GoogleCloudDialogflowCxV3beta1InlineDestination

Inline destination for a Dialogflow operation that writes or exports objects (e.g. intents) outside of Dialogflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **bytearray** | Output only. The uncompressed byte content for the objects. Only populated in responses. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_inline_destination import GoogleCloudDialogflowCxV3beta1InlineDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1InlineDestination from a JSON string
google_cloud_dialogflow_cx_v3beta1_inline_destination_instance = GoogleCloudDialogflowCxV3beta1InlineDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1InlineDestination.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_inline_destination_dict = google_cloud_dialogflow_cx_v3beta1_inline_destination_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1InlineDestination from a dict
google_cloud_dialogflow_cx_v3beta1_inline_destination_from_dict = GoogleCloudDialogflowCxV3beta1InlineDestination.from_dict(google_cloud_dialogflow_cx_v3beta1_inline_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


