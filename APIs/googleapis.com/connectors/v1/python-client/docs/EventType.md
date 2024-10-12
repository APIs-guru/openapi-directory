# EventType

EventType includes fields.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Created time. | [optional] [readonly] 
**enriched_event_payload_schema** | **str** | Output only. Schema of the event payload after enriched. Will be null if read before send is not supported. | [optional] [readonly] 
**entity_type** | **str** | Output only. Runtime entity type name. Will be null if entity type map is not available. Used for read before send feature. | [optional] [readonly] 
**event_payload_schema** | **str** | Output only. Schema of webhook event payload. | [optional] [readonly] 
**event_type_id** | **str** | Output only. Event type id. Example: &#x60;ticket.created&#x60;. | [optional] [readonly] 
**id_path** | **str** | Output only. Id path denotes the path of id in webhook payload. | [optional] [readonly] 
**name** | **str** | Output only. Resource name of the eventtype. Format: projects/{project}/locations/{location}/providers/{provider}/connectors/{connector}/versions/{version}/eventtypes/{eventtype} Only global location is supported for Connector resource. | [optional] [readonly] 
**update_time** | **str** | Output only. Updated time. | [optional] [readonly] 

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


