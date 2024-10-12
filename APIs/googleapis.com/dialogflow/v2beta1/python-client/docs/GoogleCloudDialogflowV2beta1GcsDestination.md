# GoogleCloudDialogflowV2beta1GcsDestination

Google Cloud Storage location for the output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The Google Cloud Storage URIs for the output. A URI is of the form: &#x60;gs://bucket/object-prefix-or-name&#x60; Whether a prefix or name is used depends on the use case. The requesting user must have \&quot;write-permission\&quot; to the bucket. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_gcs_destination import GoogleCloudDialogflowV2beta1GcsDestination

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1GcsDestination from a JSON string
google_cloud_dialogflow_v2beta1_gcs_destination_instance = GoogleCloudDialogflowV2beta1GcsDestination.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1GcsDestination.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_gcs_destination_dict = google_cloud_dialogflow_v2beta1_gcs_destination_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1GcsDestination from a dict
google_cloud_dialogflow_v2beta1_gcs_destination_from_dict = GoogleCloudDialogflowV2beta1GcsDestination.from_dict(google_cloud_dialogflow_v2beta1_gcs_destination_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


