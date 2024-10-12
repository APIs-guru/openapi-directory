# EnterpriseCrmEventbusProtoParameterMapField

Field represents either the key or value in an entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**literal_value** | [**EnterpriseCrmEventbusProtoParameterValueType**](EnterpriseCrmEventbusProtoParameterValueType.md) |  | [optional] 
**reference_key** | **str** | Referencing one of the WF variables. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_parameter_map_field import EnterpriseCrmEventbusProtoParameterMapField

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParameterMapField from a JSON string
enterprise_crm_eventbus_proto_parameter_map_field_instance = EnterpriseCrmEventbusProtoParameterMapField.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParameterMapField.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_parameter_map_field_dict = enterprise_crm_eventbus_proto_parameter_map_field_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParameterMapField from a dict
enterprise_crm_eventbus_proto_parameter_map_field_from_dict = EnterpriseCrmEventbusProtoParameterMapField.from_dict(enterprise_crm_eventbus_proto_parameter_map_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


