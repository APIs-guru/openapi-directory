# GoogleCloudDialogflowCxV3beta1CompareVersionsRequest

The request message for Versions.CompareVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language to compare the flow versions for. If not specified, the agent&#39;s default language is used. [Many languages](https://cloud.google.com/dialogflow/docs/reference/language) are supported. Note: languages must be enabled in the agent before they can be used. | [optional] 
**target_version** | **str** | Required. Name of the target flow version to compare with the base version. Use version ID &#x60;0&#x60; to indicate the draft version of the specified flow. Format: &#x60;projects//locations//agents//flows//versions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_compare_versions_request import GoogleCloudDialogflowCxV3beta1CompareVersionsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1CompareVersionsRequest from a JSON string
google_cloud_dialogflow_cx_v3beta1_compare_versions_request_instance = GoogleCloudDialogflowCxV3beta1CompareVersionsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1CompareVersionsRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_compare_versions_request_dict = google_cloud_dialogflow_cx_v3beta1_compare_versions_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1CompareVersionsRequest from a dict
google_cloud_dialogflow_cx_v3beta1_compare_versions_request_from_dict = GoogleCloudDialogflowCxV3beta1CompareVersionsRequest.from_dict(google_cloud_dialogflow_cx_v3beta1_compare_versions_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


