# EnterpriseCrmFrontendsEventbusProtoParameterValueType

To support various types of parameter values. Next available id: 14

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_array** | [**EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray**](EnterpriseCrmFrontendsEventbusProtoBooleanParameterArray.md) |  | [optional] 
**boolean_value** | **bool** |  | [optional] 
**double_array** | [**EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray**](EnterpriseCrmFrontendsEventbusProtoDoubleParameterArray.md) |  | [optional] 
**double_value** | **float** |  | [optional] 
**int_array** | [**EnterpriseCrmFrontendsEventbusProtoIntParameterArray**](EnterpriseCrmFrontendsEventbusProtoIntParameterArray.md) |  | [optional] 
**int_value** | **str** |  | [optional] 
**json_value** | **str** |  | [optional] 
**proto_array** | [**EnterpriseCrmFrontendsEventbusProtoProtoParameterArray**](EnterpriseCrmFrontendsEventbusProtoProtoParameterArray.md) |  | [optional] 
**proto_value** | **Dict[str, object]** |  | [optional] 
**serialized_object_value** | [**EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter**](EnterpriseCrmFrontendsEventbusProtoSerializedObjectParameter.md) |  | [optional] 
**string_array** | [**EnterpriseCrmFrontendsEventbusProtoStringParameterArray**](EnterpriseCrmFrontendsEventbusProtoStringParameterArray.md) |  | [optional] 
**string_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_parameter_value_type import EnterpriseCrmFrontendsEventbusProtoParameterValueType

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoParameterValueType from a JSON string
enterprise_crm_frontends_eventbus_proto_parameter_value_type_instance = EnterpriseCrmFrontendsEventbusProtoParameterValueType.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoParameterValueType.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_parameter_value_type_dict = enterprise_crm_frontends_eventbus_proto_parameter_value_type_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoParameterValueType from a dict
enterprise_crm_frontends_eventbus_proto_parameter_value_type_from_dict = EnterpriseCrmFrontendsEventbusProtoParameterValueType.from_dict(enterprise_crm_frontends_eventbus_proto_parameter_value_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


