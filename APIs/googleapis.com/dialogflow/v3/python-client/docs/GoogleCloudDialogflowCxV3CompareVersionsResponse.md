# GoogleCloudDialogflowCxV3CompareVersionsResponse

The response message for Versions.CompareVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_version_content_json** | **str** | JSON representation of the base version content. | [optional] 
**compare_time** | **str** | The timestamp when the two version compares. | [optional] 
**target_version_content_json** | **str** | JSON representation of the target version content. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_compare_versions_response import GoogleCloudDialogflowCxV3CompareVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3CompareVersionsResponse from a JSON string
google_cloud_dialogflow_cx_v3_compare_versions_response_instance = GoogleCloudDialogflowCxV3CompareVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3CompareVersionsResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_compare_versions_response_dict = google_cloud_dialogflow_cx_v3_compare_versions_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3CompareVersionsResponse from a dict
google_cloud_dialogflow_cx_v3_compare_versions_response_from_dict = GoogleCloudDialogflowCxV3CompareVersionsResponse.from_dict(google_cloud_dialogflow_cx_v3_compare_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


