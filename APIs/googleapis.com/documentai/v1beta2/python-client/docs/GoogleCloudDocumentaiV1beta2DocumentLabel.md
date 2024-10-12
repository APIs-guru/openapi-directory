# GoogleCloudDocumentaiV1beta2DocumentLabel

Label attaches schema information and/or other metadata to segments within a Document. Multiple Labels on a single field can denote either different labels, different instances of the same label created at different times, or some combination of both.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automl_model** | **str** | Label is generated AutoML model. This field stores the full resource name of the AutoML model. Format: &#x60;projects/{project-id}/locations/{location-id}/models/{model-id}&#x60; | [optional] 
**confidence** | **float** | Confidence score between 0 and 1 for label assignment. | [optional] 
**name** | **str** | Name of the label. When the label is generated from AutoML Text Classification model, this field represents the name of the category. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_document_label import GoogleCloudDocumentaiV1beta2DocumentLabel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2DocumentLabel from a JSON string
google_cloud_documentai_v1beta2_document_label_instance = GoogleCloudDocumentaiV1beta2DocumentLabel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2DocumentLabel.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_document_label_dict = google_cloud_documentai_v1beta2_document_label_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2DocumentLabel from a dict
google_cloud_documentai_v1beta2_document_label_from_dict = GoogleCloudDocumentaiV1beta2DocumentLabel.from_dict(google_cloud_documentai_v1beta2_document_label_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


