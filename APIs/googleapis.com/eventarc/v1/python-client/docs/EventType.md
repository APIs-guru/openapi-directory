# EventType

A representation of the event type resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Output only. Human friendly description of what the event type is about. For example \&quot;Bucket created in Cloud Storage\&quot;. | [optional] [readonly] 
**event_schema_uri** | **str** | Output only. URI for the event schema. For example \&quot;https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto\&quot; | [optional] [readonly] 
**filtering_attributes** | [**List[FilteringAttribute]**](FilteringAttribute.md) | Output only. Filtering attributes for the event type. | [optional] [readonly] 
**type** | **str** | Output only. The full name of the event type (for example, \&quot;google.cloud.storage.object.v1.finalized\&quot;). In the form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not need to match. | [optional] [readonly] 

## Example

```python
from openapi_client.models.event_type import EventType

# TODO update the JSON string below
json = "{}"
# create an instance of EventType from a JSON string
event_type_instance = EventType.from_json(json)
# print the JSON string representation of the object
print(EventType.to_json())

# convert the object into a dict
event_type_dict = event_type_instance.to_dict()
# create an instance of EventType from a dict
event_type_from_dict = EventType.from_dict(event_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


