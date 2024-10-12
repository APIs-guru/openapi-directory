# ConnectionMonitorEndpointFilterItem

Describes the connection monitor endpoint filter item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | The address of the filter item. | [optional] 
**type** | **str** | The type of item included in the filter. Currently only &#39;AgentAddress&#39; is supported. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_endpoint_filter_item import ConnectionMonitorEndpointFilterItem

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorEndpointFilterItem from a JSON string
connection_monitor_endpoint_filter_item_instance = ConnectionMonitorEndpointFilterItem.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorEndpointFilterItem.to_json())

# convert the object into a dict
connection_monitor_endpoint_filter_item_dict = connection_monitor_endpoint_filter_item_instance.to_dict()
# create an instance of ConnectionMonitorEndpointFilterItem from a dict
connection_monitor_endpoint_filter_item_from_dict = ConnectionMonitorEndpointFilterItem.from_dict(connection_monitor_endpoint_filter_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


