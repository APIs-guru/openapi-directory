# GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource

Google Cloud Storage Object URI to get the issue model file from.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_uri** | **str** | Required. Format: &#x60;gs:///&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_gcs_source import GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource from a JSON string
google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_gcs_source_instance = GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource.to_json())

# convert the object into a dict
google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_gcs_source_dict = google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_gcs_source_instance.to_dict()
# create an instance of GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource from a dict
google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_gcs_source_from_dict = GoogleCloudContactcenterinsightsV1alpha1ImportIssueModelRequestGcsSource.from_dict(google_cloud_contactcenterinsights_v1alpha1_import_issue_model_request_gcs_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


