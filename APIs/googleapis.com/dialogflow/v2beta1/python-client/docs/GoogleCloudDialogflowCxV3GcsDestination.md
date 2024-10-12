# GoogleCloudDialogflowCxV3GcsDestination

Google Cloud Storage location for a Dialogflow operation that writes or exports objects (e.g. exported agent or transcripts) outside of Dialogflow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The Google Cloud Storage URI for the exported objects. A URI is of the form: &#x60;gs://bucket/object-name-or-prefix&#x60; Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_gcs_destination import GoogleCloudDialogflowCxV3GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3GcsDestination from a JSON string
google_cloud_dialogflow_cx_v3_gcs_destination_instance = GoogleCloudDialogflowCxV3GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3GcsDestination.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_gcs_destination_dict = google_cloud_dialogflow_cx_v3_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3GcsDestination from a dict
google_cloud_dialogflow_cx_v3_gcs_destination_from_dict = GoogleCloudDialogflowCxV3GcsDestination.from_dict(google_cloud_dialogflow_cx_v3_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


