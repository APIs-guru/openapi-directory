# GoogleCloudDatalabelingV1beta1CreateInstructionRequest

Request message for CreateInstruction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instruction** | [**GoogleCloudDatalabelingV1beta1Instruction**](GoogleCloudDatalabelingV1beta1Instruction.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_create_instruction_request import GoogleCloudDatalabelingV1beta1CreateInstructionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1CreateInstructionRequest from a JSON string
google_cloud_datalabeling_v1beta1_create_instruction_request_instance = GoogleCloudDatalabelingV1beta1CreateInstructionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1CreateInstructionRequest.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_create_instruction_request_dict = google_cloud_datalabeling_v1beta1_create_instruction_request_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1CreateInstructionRequest from a dict
google_cloud_datalabeling_v1beta1_create_instruction_request_from_dict = GoogleCloudDatalabelingV1beta1CreateInstructionRequest.from_dict(google_cloud_datalabeling_v1beta1_create_instruction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


