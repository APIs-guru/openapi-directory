# GoogleCloudDialogflowV2beta1GcsSource

Google Cloud Storage location for single input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uri** | **str** | Required. The Google Cloud Storage URIs for the inputs. A URI is of the form: &#x60;gs://bucket/object-prefix-or-name&#x60; Whether a prefix or name is used depends on the use case. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_gcs_source import GoogleCloudDialogflowV2beta1GcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1GcsSource from a JSON string
google_cloud_dialogflow_v2beta1_gcs_source_instance = GoogleCloudDialogflowV2beta1GcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1GcsSource.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_gcs_source_dict = google_cloud_dialogflow_v2beta1_gcs_source_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1GcsSource from a dict
google_cloud_dialogflow_v2beta1_gcs_source_from_dict = GoogleCloudDialogflowV2beta1GcsSource.from_dict(google_cloud_dialogflow_v2beta1_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


