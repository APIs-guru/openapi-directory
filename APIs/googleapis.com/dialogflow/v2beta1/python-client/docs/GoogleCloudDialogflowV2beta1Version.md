# GoogleCloudDialogflowV2beta1Version

You can create multiple versions of your agent and publish them to separate environments. When you edit an agent, you are editing the draft agent. At any point, you can save the draft agent as an agent version, which is an immutable snapshot of your agent. When you save the draft agent, it is published to the default environment. When you create agent versions, you can publish them to custom environments. You can create a variety of custom environments for: - testing - development - production - etc. For more information, see the [versions and environments guide](https://cloud.google.com/dialogflow/docs/agents-versions).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation time of this version. This field is read-only, i.e., it cannot be set by create and update methods. | [optional] [readonly] 
**description** | **str** | Optional. The developer-provided description of this version. | [optional] 
**name** | **str** | Output only. The unique identifier of this agent version. Supported formats: - &#x60;projects//agent/versions/&#x60; - &#x60;projects//locations//agent/versions/&#x60; | [optional] [readonly] 
**status** | **str** | Output only. The status of this version. This field is read-only and cannot be set by create and update methods. | [optional] [readonly] 
**version_number** | **int** | Output only. The sequential number of this version. This field is read-only which means it cannot be set by create and update methods. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2beta1_version import GoogleCloudDialogflowV2beta1Version

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2beta1Version from a JSON string
google_cloud_dialogflow_v2beta1_version_instance = GoogleCloudDialogflowV2beta1Version.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2beta1Version.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2beta1_version_dict = google_cloud_dialogflow_v2beta1_version_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2beta1Version from a dict
google_cloud_dialogflow_v2beta1_version_from_dict = GoogleCloudDialogflowV2beta1Version.from_dict(google_cloud_dialogflow_v2beta1_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


