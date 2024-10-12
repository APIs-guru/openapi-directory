# EnterpriseCrmEventbusProtoPropertyEntry

Key-value pair of EventBus property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key is used to retrieve the corresponding property value. This should be unique for a given fired event. The Tasks should be aware of the keys used while firing the events for them to be able to retrieve the values. | [optional] 
**value** | [**EnterpriseCrmEventbusProtoValueType**](EnterpriseCrmEventbusProtoValueType.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_property_entry import EnterpriseCrmEventbusProtoPropertyEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoPropertyEntry from a JSON string
enterprise_crm_eventbus_proto_property_entry_instance = EnterpriseCrmEventbusProtoPropertyEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoPropertyEntry.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_property_entry_dict = enterprise_crm_eventbus_proto_property_entry_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoPropertyEntry from a dict
enterprise_crm_eventbus_proto_property_entry_from_dict = EnterpriseCrmEventbusProtoPropertyEntry.from_dict(enterprise_crm_eventbus_proto_property_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


