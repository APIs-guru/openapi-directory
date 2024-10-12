# GoogleCloudDatalabelingV1beta1ListInstructionsResponse

Results of listing instructions under a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instructions** | [**List[GoogleCloudDatalabelingV1beta1Instruction]**](GoogleCloudDatalabelingV1beta1Instruction.md) | The list of Instructions to return. | [optional] 
**next_page_token** | **str** | A token to retrieve next page of results. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_list_instructions_response import GoogleCloudDatalabelingV1beta1ListInstructionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1ListInstructionsResponse from a JSON string
google_cloud_datalabeling_v1beta1_list_instructions_response_instance = GoogleCloudDatalabelingV1beta1ListInstructionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1ListInstructionsResponse.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_list_instructions_response_dict = google_cloud_datalabeling_v1beta1_list_instructions_response_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1ListInstructionsResponse from a dict
google_cloud_datalabeling_v1beta1_list_instructions_response_from_dict = GoogleCloudDatalabelingV1beta1ListInstructionsResponse.from_dict(google_cloud_datalabeling_v1beta1_list_instructions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


