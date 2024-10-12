# GoogleCloudDialogflowV2AnnotatedMessagePart

Represents a part of a message possibly annotated with an entity. The part can be an entity or purely a part of the message between two entities or message start/end.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_type** | **str** | The [Dialogflow system entity type](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. If this is empty, Dialogflow could not annotate the phrase part with a system entity. | [optional] 
**formatted_value** | **object** | The [Dialogflow system entity formatted value ](https://cloud.google.com/dialogflow/docs/reference/system-entities) of this message part. For example for a system entity of type &#x60;@sys.unit-currency&#x60;, this may contain: { \&quot;amount\&quot;: 5, \&quot;currency\&quot;: \&quot;USD\&quot; }  | [optional] 
**text** | **str** | A part of a message possibly annotated with an entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_annotated_message_part import GoogleCloudDialogflowV2AnnotatedMessagePart

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2AnnotatedMessagePart from a JSON string
google_cloud_dialogflow_v2_annotated_message_part_instance = GoogleCloudDialogflowV2AnnotatedMessagePart.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2AnnotatedMessagePart.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_annotated_message_part_dict = google_cloud_dialogflow_v2_annotated_message_part_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2AnnotatedMessagePart from a dict
google_cloud_dialogflow_v2_annotated_message_part_from_dict = GoogleCloudDialogflowV2AnnotatedMessagePart.from_dict(google_cloud_dialogflow_v2_annotated_message_part_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


