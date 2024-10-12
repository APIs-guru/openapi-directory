# ServiceBus

properties related to servicebus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_connection_string** | **str** | PrimaryConnectionString of the endpoint. Will be obfuscated during read | [optional] 
**secondary_connection_string** | **str** | SecondaryConnectionString of the endpoint. Will be obfuscated during read | [optional] 

## Example

```python
from openapi_client.models.service_bus import ServiceBus

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceBus from a JSON string
service_bus_instance = ServiceBus.from_json(json)
# print the JSON string representation of the object
print(ServiceBus.to_json())

# convert the object into a dict
service_bus_dict = service_bus_instance.to_dict()
# create an instance of ServiceBus from a dict
service_bus_from_dict = ServiceBus.from_dict(service_bus_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


