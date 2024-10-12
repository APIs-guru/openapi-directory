# EventHubConnectionProperties

Class representing the Kusto event hub connection properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group** | **str** | The event hub consumer group. | 
**data_format** | [**DataFormat**](DataFormat.md) |  | [optional] 
**event_hub_resource_id** | **str** | The resource ID of the event hub to be used to create a data connection. | 
**event_system_properties** | **List[str]** | System properties of the event hub | [optional] 
**mapping_rule_name** | **str** | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | [optional] 
**table_name** | **str** | The table where the data should be ingested. Optionally the table information can be added to each message. | [optional] 

## Example

```python
from openapi_client.models.event_hub_connection_properties import EventHubConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventHubConnectionProperties from a JSON string
event_hub_connection_properties_instance = EventHubConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(EventHubConnectionProperties.to_json())

# convert the object into a dict
event_hub_connection_properties_dict = event_hub_connection_properties_instance.to_dict()
# create an instance of EventHubConnectionProperties from a dict
event_hub_connection_properties_from_dict = EventHubConnectionProperties.from_dict(event_hub_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


