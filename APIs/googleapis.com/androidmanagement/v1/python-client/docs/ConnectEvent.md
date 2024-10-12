# ConnectEvent

A TCP connect event was initiated through the standard network stack.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_ip_address** | **str** | The destination IP address of the connect call. | [optional] 
**destination_port** | **int** | The destination port of the connect call. | [optional] 
**package_name** | **str** | The package name of the UID that performed the connect call. | [optional] 

## Example

```python
from openapi_client.models.connect_event import ConnectEvent

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectEvent from a JSON string
connect_event_instance = ConnectEvent.from_json(json)
# print the JSON string representation of the object
print(ConnectEvent.to_json())

# convert the object into a dict
connect_event_dict = connect_event_instance.to_dict()
# create an instance of ConnectEvent from a dict
connect_event_from_dict = ConnectEvent.from_dict(connect_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


