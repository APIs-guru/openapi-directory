# GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig

The common config to specify a set of documents used as input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_documents** | [**GoogleCloudDocumentaiV1beta3GcsDocuments**](GoogleCloudDocumentaiV1beta3GcsDocuments.md) |  | [optional] 
**gcs_prefix** | [**GoogleCloudDocumentaiV1beta3GcsPrefix**](GoogleCloudDocumentaiV1beta3GcsPrefix.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_batch_documents_input_config import GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig from a JSON string
google_cloud_documentai_v1beta3_batch_documents_input_config_instance = GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_batch_documents_input_config_dict = google_cloud_documentai_v1beta3_batch_documents_input_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig from a dict
google_cloud_documentai_v1beta3_batch_documents_input_config_from_dict = GoogleCloudDocumentaiV1beta3BatchDocumentsInputConfig.from_dict(google_cloud_documentai_v1beta3_batch_documents_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


