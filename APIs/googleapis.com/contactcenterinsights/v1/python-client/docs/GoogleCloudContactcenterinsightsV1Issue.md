# GoogleCloudContactcenterinsightsV1Issue

The issue resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which this issue was created. | [optional] [readonly] 
**display_name** | **str** | The representative name for the issue. | [optional] 
**name** | **str** | Immutable. The resource name of the issue. Format: projects/{project}/locations/{location}/issueModels/{issue_model}/issues/{issue} | [optional] 
**sample_utterances** | **List[str]** | Output only. Resource names of the sample representative utterances that match to this issue. | [optional] [readonly] 
**update_time** | **str** | Output only. The most recent time that this issue was updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_issue import GoogleCloudContactcenterinsightsV1Issue

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1Issue from a JSON string
google_cloud_contactcenterinsights_v1_issue_instance = GoogleCloudContactcenterinsightsV1Issue.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1Issue.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_issue_dict = google_cloud_contactcenterinsights_v1_issue_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1Issue from a dict
google_cloud_contactcenterinsights_v1_issue_from_dict = GoogleCloudContactcenterinsightsV1Issue.from_dict(google_cloud_contactcenterinsights_v1_issue_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


