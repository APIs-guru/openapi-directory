# GoogleCloudDialogflowCxV3ExportIntentsResponse

The response message for Intents.ExportIntents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**intents_content** | [**GoogleCloudDialogflowCxV3InlineDestination**](GoogleCloudDialogflowCxV3InlineDestination.md) |  | [optional] 
**intents_uri** | **str** | The URI to a file containing the exported intents. This field is populated only if &#x60;intents_uri&#x60; is specified in ExportIntentsRequest. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_export_intents_response import GoogleCloudDialogflowCxV3ExportIntentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3ExportIntentsResponse from a JSON string
google_cloud_dialogflow_cx_v3_export_intents_response_instance = GoogleCloudDialogflowCxV3ExportIntentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3ExportIntentsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_export_intents_response_dict = google_cloud_dialogflow_cx_v3_export_intents_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3ExportIntentsResponse from a dict
google_cloud_dialogflow_cx_v3_export_intents_response_from_dict = GoogleCloudDialogflowCxV3ExportIntentsResponse.from_dict(google_cloud_dialogflow_cx_v3_export_intents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


