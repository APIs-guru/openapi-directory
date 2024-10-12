# GoogleCloudDatalabelingV1beta1CsvInstruction

Deprecated: this instruction format is not supported any more. Instruction from a CSV file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_file_uri** | **str** | CSV file for the instruction. Only gcs path is allowed. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_csv_instruction import GoogleCloudDatalabelingV1beta1CsvInstruction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1CsvInstruction from a JSON string
google_cloud_datalabeling_v1beta1_csv_instruction_instance = GoogleCloudDatalabelingV1beta1CsvInstruction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1CsvInstruction.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_csv_instruction_dict = google_cloud_datalabeling_v1beta1_csv_instruction_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1CsvInstruction from a dict
google_cloud_datalabeling_v1beta1_csv_instruction_from_dict = GoogleCloudDatalabelingV1beta1CsvInstruction.from_dict(google_cloud_datalabeling_v1beta1_csv_instruction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


