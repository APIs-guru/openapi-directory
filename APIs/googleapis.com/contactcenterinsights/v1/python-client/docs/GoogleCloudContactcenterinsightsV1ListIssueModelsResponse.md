# GoogleCloudContactcenterinsightsV1ListIssueModelsResponse

The response of listing issue models.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_models** | [**List[GoogleCloudContactcenterinsightsV1IssueModel]**](GoogleCloudContactcenterinsightsV1IssueModel.md) | The issue models that match the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1_list_issue_models_response import GoogleCloudContactcenterinsightsV1ListIssueModelsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1ListIssueModelsResponse from a JSON string
google_cloud_contactcenterinsights_v1_list_issue_models_response_instance = GoogleCloudContactcenterinsightsV1ListIssueModelsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1ListIssueModelsResponse.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1_list_issue_models_response_dict = google_cloud_contactcenterinsights_v1_list_issue_models_response_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1ListIssueModelsResponse from a dict
google_cloud_contactcenterinsights_v1_list_issue_models_response_from_dict = GoogleCloudContactcenterinsightsV1ListIssueModelsResponse.from_dict(google_cloud_contactcenterinsights_v1_list_issue_models_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


