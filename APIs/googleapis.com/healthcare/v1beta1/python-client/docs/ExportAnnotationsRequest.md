# ExportAnnotationsRequest

Request to export Annotations. The export operation is not atomic. If a failure occurs, any annotations already exported are not removed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_destination** | [**GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination**](GoogleCloudHealthcareV1beta1AnnotationBigQueryDestination.md) |  | [optional] 
**gcs_destination** | [**GoogleCloudHealthcareV1beta1AnnotationGcsDestination**](GoogleCloudHealthcareV1beta1AnnotationGcsDestination.md) |  | [optional] 

## Example

```python
from openapi_client.models.export_annotations_request import ExportAnnotationsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ExportAnnotationsRequest from a JSON string
export_annotations_request_instance = ExportAnnotationsRequest.from_json(json)
# print the JSON string representation of the object
print(ExportAnnotationsRequest.to_json())

# convert the object into a dict
export_annotations_request_dict = export_annotations_request_instance.to_dict()
# create an instance of ExportAnnotationsRequest from a dict
export_annotations_request_from_dict = ExportAnnotationsRequest.from_dict(export_annotations_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


