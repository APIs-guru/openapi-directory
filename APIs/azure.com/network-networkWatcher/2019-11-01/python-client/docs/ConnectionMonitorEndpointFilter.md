# ConnectionMonitorEndpointFilter

Describes the connection monitor endpoint filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[ConnectionMonitorEndpointFilterItem]**](ConnectionMonitorEndpointFilterItem.md) | List of items in the filter. | [optional] 
**type** | **str** | The behavior of the endpoint filter. Currently only &#39;Include&#39; is supported. | [optional] 

## Example

```python
from openapi_client.models.connection_monitor_endpoint_filter import ConnectionMonitorEndpointFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectionMonitorEndpointFilter from a JSON string
connection_monitor_endpoint_filter_instance = ConnectionMonitorEndpointFilter.from_json(json)
# print the JSON string representation of the object
print(ConnectionMonitorEndpointFilter.to_json())

# convert the object into a dict
connection_monitor_endpoint_filter_dict = connection_monitor_endpoint_filter_instance.to_dict()
# create an instance of ConnectionMonitorEndpointFilter from a dict
connection_monitor_endpoint_filter_from_dict = ConnectionMonitorEndpointFilter.from_dict(connection_monitor_endpoint_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


