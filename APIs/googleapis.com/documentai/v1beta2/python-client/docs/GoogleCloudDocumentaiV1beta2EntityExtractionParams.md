# GoogleCloudDocumentaiV1beta2EntityExtractionParams

Parameters to control entity extraction behavior.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Whether to enable entity extraction. | [optional] 
**model_version** | **str** | Model version of the entity extraction. Default is \&quot;builtin/stable\&quot;. Specify \&quot;builtin/latest\&quot; for the latest model. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_entity_extraction_params import GoogleCloudDocumentaiV1beta2EntityExtractionParams

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2EntityExtractionParams from a JSON string
google_cloud_documentai_v1beta2_entity_extraction_params_instance = GoogleCloudDocumentaiV1beta2EntityExtractionParams.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2EntityExtractionParams.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_entity_extraction_params_dict = google_cloud_documentai_v1beta2_entity_extraction_params_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2EntityExtractionParams from a dict
google_cloud_documentai_v1beta2_entity_extraction_params_from_dict = GoogleCloudDocumentaiV1beta2EntityExtractionParams.from_dict(google_cloud_documentai_v1beta2_entity_extraction_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


