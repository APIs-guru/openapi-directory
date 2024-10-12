# PeeringServicePrefixEvent

The details of the event associated with a prefix.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**event_description** | **str** | The description of the event associated with a prefix. | [optional] [readonly] 
**event_level** | **str** | The level of the event associated with a prefix. | [optional] [readonly] 
**event_summary** | **str** | The summary of the event associated with a prefix. | [optional] [readonly] 
**event_timestamp** | **datetime** | The timestamp of the event associated with a prefix. | [optional] [readonly] 
**event_type** | **str** | The type of the event associated with a prefix. | [optional] [readonly] 

## Example

```python
from openapi_client.models.peering_service_prefix_event import PeeringServicePrefixEvent

# TODO update the JSON string below
json = "{}"
# create an instance of PeeringServicePrefixEvent from a JSON string
peering_service_prefix_event_instance = PeeringServicePrefixEvent.from_json(json)
# print the JSON string representation of the object
print(PeeringServicePrefixEvent.to_json())

# convert the object into a dict
peering_service_prefix_event_dict = peering_service_prefix_event_instance.to_dict()
# create an instance of PeeringServicePrefixEvent from a dict
peering_service_prefix_event_from_dict = PeeringServicePrefixEvent.from_dict(peering_service_prefix_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


