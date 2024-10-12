# GoogleCloudDatalabelingV1beta1Instruction

Instruction of how to perform the labeling task for human operators. Currently only PDF instruction is supported.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blocking_resources** | **List[str]** | Output only. The names of any related resources that are blocking changes to the instruction. | [optional] 
**create_time** | **str** | Output only. Creation time of instruction. | [optional] 
**csv_instruction** | [**GoogleCloudDatalabelingV1beta1CsvInstruction**](GoogleCloudDatalabelingV1beta1CsvInstruction.md) |  | [optional] 
**data_type** | **str** | Required. The data type of this instruction. | [optional] 
**description** | **str** | Optional. User-provided description of the instruction. The description can be up to 10000 characters long. | [optional] 
**display_name** | **str** | Required. The display name of the instruction. Maximum of 64 characters. | [optional] 
**name** | **str** | Output only. Instruction resource name, format: projects/{project_id}/instructions/{instruction_id} | [optional] 
**pdf_instruction** | [**GoogleCloudDatalabelingV1beta1PdfInstruction**](GoogleCloudDatalabelingV1beta1PdfInstruction.md) |  | [optional] 
**update_time** | **str** | Output only. Last update time of instruction. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_instruction import GoogleCloudDatalabelingV1beta1Instruction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1Instruction from a JSON string
google_cloud_datalabeling_v1beta1_instruction_instance = GoogleCloudDatalabelingV1beta1Instruction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1Instruction.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_instruction_dict = google_cloud_datalabeling_v1beta1_instruction_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1Instruction from a dict
google_cloud_datalabeling_v1beta1_instruction_from_dict = GoogleCloudDatalabelingV1beta1Instruction.from_dict(google_cloud_datalabeling_v1beta1_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


