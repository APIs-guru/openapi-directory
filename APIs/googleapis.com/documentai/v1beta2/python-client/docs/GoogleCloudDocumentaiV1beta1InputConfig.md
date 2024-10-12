# GoogleCloudDocumentaiV1beta1InputConfig

The desired input location and metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GoogleCloudDocumentaiV1beta1GcsSource**](GoogleCloudDocumentaiV1beta1GcsSource.md) |  | [optional] 
**mime_type** | **str** | Required. Mimetype of the input. Current supported mimetypes are application/pdf, image/tiff, and image/gif. In addition, application/json type is supported for requests with ProcessDocumentRequest.automl_params field set. The JSON file needs to be in Document format. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta1_input_config import GoogleCloudDocumentaiV1beta1InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta1InputConfig from a JSON string
google_cloud_documentai_v1beta1_input_config_instance = GoogleCloudDocumentaiV1beta1InputConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta1InputConfig.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta1_input_config_dict = google_cloud_documentai_v1beta1_input_config_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta1InputConfig from a dict
google_cloud_documentai_v1beta1_input_config_from_dict = GoogleCloudDocumentaiV1beta1InputConfig.from_dict(google_cloud_documentai_v1beta1_input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


