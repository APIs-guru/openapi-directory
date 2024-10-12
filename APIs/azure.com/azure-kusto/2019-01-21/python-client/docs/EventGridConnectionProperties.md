# EventGridConnectionProperties

Class representing the Kusto event grid connection properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_group** | **str** | The event hub consumer group. | 
**data_format** | [**DataFormat**](DataFormat.md) |  | 
**event_hub_resource_id** | **str** | The resource ID where the event grid is configured to send events. | 
**mapping_rule_name** | **str** | The mapping rule to be used to ingest the data. Optionally the mapping information can be added to each message. | [optional] 
**storage_account_resource_id** | **str** | The resource ID of the storage account where the data resides. | 
**table_name** | **str** | The table where the data should be ingested. Optionally the table information can be added to each message. | 

## Example

```python
from openapi_client.models.event_grid_connection_properties import EventGridConnectionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EventGridConnectionProperties from a JSON string
event_grid_connection_properties_instance = EventGridConnectionProperties.from_json(json)
# print the JSON string representation of the object
print(EventGridConnectionProperties.to_json())

# convert the object into a dict
event_grid_connection_properties_dict = event_grid_connection_properties_instance.to_dict()
# create an instance of EventGridConnectionProperties from a dict
event_grid_connection_properties_from_dict = EventGridConnectionProperties.from_dict(event_grid_connection_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


