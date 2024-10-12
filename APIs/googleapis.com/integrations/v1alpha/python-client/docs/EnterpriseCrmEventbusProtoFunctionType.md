# EnterpriseCrmEventbusProtoFunctionType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_function** | [**EnterpriseCrmEventbusProtoBaseFunction**](EnterpriseCrmEventbusProtoBaseFunction.md) |  | [optional] 
**boolean_array_function** | [**EnterpriseCrmEventbusProtoBooleanArrayFunction**](EnterpriseCrmEventbusProtoBooleanArrayFunction.md) |  | [optional] 
**boolean_function** | [**EnterpriseCrmEventbusProtoBooleanFunction**](EnterpriseCrmEventbusProtoBooleanFunction.md) |  | [optional] 
**double_array_function** | [**EnterpriseCrmEventbusProtoDoubleArrayFunction**](EnterpriseCrmEventbusProtoDoubleArrayFunction.md) |  | [optional] 
**double_function** | [**EnterpriseCrmEventbusProtoDoubleFunction**](EnterpriseCrmEventbusProtoDoubleFunction.md) |  | [optional] 
**int_array_function** | [**EnterpriseCrmEventbusProtoIntArrayFunction**](EnterpriseCrmEventbusProtoIntArrayFunction.md) |  | [optional] 
**int_function** | [**EnterpriseCrmEventbusProtoIntFunction**](EnterpriseCrmEventbusProtoIntFunction.md) |  | [optional] 
**json_function** | [**EnterpriseCrmEventbusProtoJsonFunction**](EnterpriseCrmEventbusProtoJsonFunction.md) |  | [optional] 
**proto_array_function** | [**EnterpriseCrmEventbusProtoProtoArrayFunction**](EnterpriseCrmEventbusProtoProtoArrayFunction.md) |  | [optional] 
**proto_function** | [**EnterpriseCrmEventbusProtoProtoFunction**](EnterpriseCrmEventbusProtoProtoFunction.md) |  | [optional] 
**string_array_function** | [**EnterpriseCrmEventbusProtoStringArrayFunction**](EnterpriseCrmEventbusProtoStringArrayFunction.md) |  | [optional] 
**string_function** | [**EnterpriseCrmEventbusProtoStringFunction**](EnterpriseCrmEventbusProtoStringFunction.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_function_type import EnterpriseCrmEventbusProtoFunctionType

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoFunctionType from a JSON string
enterprise_crm_eventbus_proto_function_type_instance = EnterpriseCrmEventbusProtoFunctionType.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoFunctionType.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_function_type_dict = enterprise_crm_eventbus_proto_function_type_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoFunctionType from a dict
enterprise_crm_eventbus_proto_function_type_from_dict = EnterpriseCrmEventbusProtoFunctionType.from_dict(enterprise_crm_eventbus_proto_function_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


