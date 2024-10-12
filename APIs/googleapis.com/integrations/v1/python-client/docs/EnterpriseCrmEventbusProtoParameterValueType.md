# EnterpriseCrmEventbusProtoParameterValueType

LINT.IfChange To support various types of parameter values. Next available id: 14

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_array** | [**EnterpriseCrmEventbusProtoBooleanParameterArray**](EnterpriseCrmEventbusProtoBooleanParameterArray.md) |  | [optional] 
**boolean_value** | **bool** |  | [optional] 
**double_array** | [**EnterpriseCrmEventbusProtoDoubleParameterArray**](EnterpriseCrmEventbusProtoDoubleParameterArray.md) |  | [optional] 
**double_value** | **float** |  | [optional] 
**int_array** | [**EnterpriseCrmEventbusProtoIntParameterArray**](EnterpriseCrmEventbusProtoIntParameterArray.md) |  | [optional] 
**int_value** | **str** |  | [optional] 
**proto_array** | [**EnterpriseCrmEventbusProtoProtoParameterArray**](EnterpriseCrmEventbusProtoProtoParameterArray.md) |  | [optional] 
**proto_value** | **Dict[str, object]** |  | [optional] 
**serialized_object_value** | [**EnterpriseCrmEventbusProtoSerializedObjectParameter**](EnterpriseCrmEventbusProtoSerializedObjectParameter.md) |  | [optional] 
**string_array** | [**EnterpriseCrmEventbusProtoStringParameterArray**](EnterpriseCrmEventbusProtoStringParameterArray.md) |  | [optional] 
**string_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_parameter_value_type import EnterpriseCrmEventbusProtoParameterValueType

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoParameterValueType from a JSON string
enterprise_crm_eventbus_proto_parameter_value_type_instance = EnterpriseCrmEventbusProtoParameterValueType.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoParameterValueType.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_parameter_value_type_dict = enterprise_crm_eventbus_proto_parameter_value_type_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoParameterValueType from a dict
enterprise_crm_eventbus_proto_parameter_value_type_from_dict = EnterpriseCrmEventbusProtoParameterValueType.from_dict(enterprise_crm_eventbus_proto_parameter_value_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


