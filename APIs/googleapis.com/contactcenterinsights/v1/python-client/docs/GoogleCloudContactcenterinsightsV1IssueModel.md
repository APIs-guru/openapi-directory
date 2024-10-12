# GoogleCloudContactcenterinsightsV1IssueModel

The issue model resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which this issue model was created. | [optional] [readonly] 
**display_name** | **str** | The representative name for the issue model. | [optional] 
**input_data_config** | [**GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig**](GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.md) |  | [optional] 
**issue_count** | **str** | Output only. Number of issues in this issue model. | [optional] [readonly] 
**language_code** | **str** | Language of the model. | [optional] 
**model_type** | **str** | Type of the model. | [optional] 
**name** | **str** | Immutable. The resource name of the issue model. Format: projects/{project}/locations/{location}/issueModels/{issue_model} | [optional] 
**state** | **str** | Output only. State of the model. | [optional] [readonly] 
**training_stats** | [**GoogleCloudContactcenterinsightsV1IssueModelLabelStats**](GoogleCloudContactcenterinsightsV1IssueModelLabelStats.md) |  | [optional] 
**update_time** | **str** | Output only. The most recent time at which the issue model was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_issue_model import GoogleCloudContactcenterinsightsV1IssueModel

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1IssueModel from a JSON string
google_cloud_contactcenterinsights_v1_issue_model_instance = GoogleCloudContactcenterinsightsV1IssueModel.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1IssueModel.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_issue_model_dict = google_cloud_contactcenterinsights_v1_issue_model_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1IssueModel from a dict
google_cloud_contactcenterinsights_v1_issue_model_from_dict = GoogleCloudContactcenterinsightsV1IssueModel.from_dict(google_cloud_contactcenterinsights_v1_issue_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


