# GoogleCloudDialogflowV2beta1GcsSources

Google Cloud Storage locations for the inputs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**uris** | **List[str]** | Required. Google Cloud Storage URIs for the inputs. A URI is of the form: &#x60;gs://bucket/object-prefix-or-name&#x60; Whether a prefix or name is used depends on the use case. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_gcs_sources import GoogleCloudDialogflowV2beta1GcsSources

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1GcsSources from a JSON string
google_cloud_dialogflow_v2beta1_gcs_sources_instance = GoogleCloudDialogflowV2beta1GcsSources.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1GcsSources.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_gcs_sources_dict = google_cloud_dialogflow_v2beta1_gcs_sources_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1GcsSources from a dict
google_cloud_dialogflow_v2beta1_gcs_sources_from_dict = GoogleCloudDialogflowV2beta1GcsSources.from_dict(google_cloud_dialogflow_v2beta1_gcs_sources_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


