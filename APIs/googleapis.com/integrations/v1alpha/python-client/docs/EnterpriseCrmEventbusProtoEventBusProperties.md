# EnterpriseCrmEventbusProtoEventBusProperties

LINT.IfChange This message is used for storing key value pair properties for each Event / Task in the EventBus.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**List[EnterpriseCrmEventbusProtoPropertyEntry]**](EnterpriseCrmEventbusProtoPropertyEntry.md) | An unordered list of property entries. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_event_bus_properties import EnterpriseCrmEventbusProtoEventBusProperties

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoEventBusProperties from a JSON string
enterprise_crm_eventbus_proto_event_bus_properties_instance = EnterpriseCrmEventbusProtoEventBusProperties.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoEventBusProperties.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_event_bus_properties_dict = enterprise_crm_eventbus_proto_event_bus_properties_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoEventBusProperties from a dict
enterprise_crm_eventbus_proto_event_bus_properties_from_dict = EnterpriseCrmEventbusProtoEventBusProperties.from_dict(enterprise_crm_eventbus_proto_event_bus_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


