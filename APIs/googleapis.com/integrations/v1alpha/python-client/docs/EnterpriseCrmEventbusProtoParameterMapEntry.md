# EnterpriseCrmEventbusProtoParameterMapEntry

Entry is a pair of key and value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | [**EnterpriseCrmEventbusProtoParameterMapField**](EnterpriseCrmEventbusProtoParameterMapField.md) |  | [optional] 
**value** | [**EnterpriseCrmEventbusProtoParameterMapField**](EnterpriseCrmEventbusProtoParameterMapField.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_parameter_map_entry import EnterpriseCrmEventbusProtoParameterMapEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParameterMapEntry from a JSON string
enterprise_crm_eventbus_proto_parameter_map_entry_instance = EnterpriseCrmEventbusProtoParameterMapEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParameterMapEntry.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_parameter_map_entry_dict = enterprise_crm_eventbus_proto_parameter_map_entry_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParameterMapEntry from a dict
enterprise_crm_eventbus_proto_parameter_map_entry_from_dict = EnterpriseCrmEventbusProtoParameterMapEntry.from_dict(enterprise_crm_eventbus_proto_parameter_map_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


