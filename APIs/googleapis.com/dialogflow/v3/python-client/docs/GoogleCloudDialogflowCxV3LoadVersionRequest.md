# GoogleCloudDialogflowCxV3LoadVersionRequest

The request message for Versions.LoadVersion.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_override_agent_resources** | **bool** | This field is used to prevent accidental overwrite of other agent resources, which can potentially impact other flow&#39;s behavior. If &#x60;allow_override_agent_resources&#x60; is false, conflicted agent-level resources will not be overridden (i.e. intents, entities, webhooks). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_load_version_request import GoogleCloudDialogflowCxV3LoadVersionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3LoadVersionRequest from a JSON string
google_cloud_dialogflow_cx_v3_load_version_request_instance = GoogleCloudDialogflowCxV3LoadVersionRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3LoadVersionRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_load_version_request_dict = google_cloud_dialogflow_cx_v3_load_version_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3LoadVersionRequest from a dict
google_cloud_dialogflow_cx_v3_load_version_request_from_dict = GoogleCloudDialogflowCxV3LoadVersionRequest.from_dict(google_cloud_dialogflow_cx_v3_load_version_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


