# GoogleCloudAiplatformV1beta1Event

An edge describing the relationship between an Artifact and an Execution in a lineage graph.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact** | **str** | Required. The relative resource name of the Artifact in the Event. | [optional] 
**event_time** | **str** | Output only. Time the Event occurred. | [optional] [readonly] 
**execution** | **str** | Output only. The relative resource name of the Execution in the Event. | [optional] [readonly] 
**labels** | **Dict[str, str]** | The labels with user-defined metadata to annotate Events. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one Event (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with \&quot;aiplatform.googleapis.com/\&quot; and are immutable. | [optional] 
**type** | **str** | Required. The type of the Event. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_event import GoogleCloudAiplatformV1beta1Event

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1Event from a JSON string
google_cloud_aiplatform_v1beta1_event_instance = GoogleCloudAiplatformV1beta1Event.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1Event.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_event_dict = google_cloud_aiplatform_v1beta1_event_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1Event from a dict
google_cloud_aiplatform_v1beta1_event_from_dict = GoogleCloudAiplatformV1beta1Event.from_dict(google_cloud_aiplatform_v1beta1_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


