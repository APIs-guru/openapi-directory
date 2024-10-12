# GoogleCloudDatalabelingV1beta1PdfInstruction

Instruction from a PDF file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_file_uri** | **str** | PDF file for the instruction. Only gcs path is allowed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_pdf_instruction import GoogleCloudDatalabelingV1beta1PdfInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1PdfInstruction from a JSON string
google_cloud_datalabeling_v1beta1_pdf_instruction_instance = GoogleCloudDatalabelingV1beta1PdfInstruction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1PdfInstruction.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_pdf_instruction_dict = google_cloud_datalabeling_v1beta1_pdf_instruction_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1PdfInstruction from a dict
google_cloud_datalabeling_v1beta1_pdf_instruction_from_dict = GoogleCloudDatalabelingV1beta1PdfInstruction.from_dict(google_cloud_datalabeling_v1beta1_pdf_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


