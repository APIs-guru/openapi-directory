# EventHub

properties related to eventhub.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**connection_string_primary_key** | **str** | PrimaryConnectionString of the endpoint. Will be obfuscated during read | [optional] 
**connection_string_secondary_key** | **str** | SecondaryConnectionString of the endpoint. Will be obfuscated during read | [optional] 

## Example

```python
from openapi_client.models.event_hub import EventHub

# TODO update the JSON string below
json = "{}"
# create an instance of EventHub from a JSON string
event_hub_instance = EventHub.from_json(json)
# print the JSON string representation of the object
print(EventHub.to_json())

# convert the object into a dict
event_hub_dict = event_hub_instance.to_dict()
# create an instance of EventHub from a dict
event_hub_from_dict = EventHub.from_dict(event_hub_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


