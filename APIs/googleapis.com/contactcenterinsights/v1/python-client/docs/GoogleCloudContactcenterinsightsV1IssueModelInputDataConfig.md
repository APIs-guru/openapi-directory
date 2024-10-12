# GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig

Configs for the input data used to create the issue model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | **str** | A filter to reduce the conversations used for training the model to a specific subset. | [optional] 
**medium** | **str** | Medium of conversations used in training data. This field is being deprecated. To specify the medium to be used in training a new issue model, set the &#x60;medium&#x60; field on &#x60;filter&#x60;. | [optional] 
**training_conversations_count** | **str** | Output only. Number of conversations used in training. Output only. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_issue_model_input_data_config import GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig from a JSON string
google_cloud_contactcenterinsights_v1_issue_model_input_data_config_instance = GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_issue_model_input_data_config_dict = google_cloud_contactcenterinsights_v1_issue_model_input_data_config_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig from a dict
google_cloud_contactcenterinsights_v1_issue_model_input_data_config_from_dict = GoogleCloudContactcenterinsightsV1IssueModelInputDataConfig.from_dict(google_cloud_contactcenterinsights_v1_issue_model_input_data_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


