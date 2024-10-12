# EnterpriseCrmEventbusProtoValueType

Used for define type for values. Currently supported value types include int, string, double, array, and any proto message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boolean_value** | **bool** |  | [optional] 
**double_array** | [**EnterpriseCrmEventbusProtoDoubleArray**](EnterpriseCrmEventbusProtoDoubleArray.md) |  | [optional] 
**double_value** | **float** |  | [optional] 
**int_array** | [**EnterpriseCrmEventbusProtoIntArray**](EnterpriseCrmEventbusProtoIntArray.md) |  | [optional] 
**int_value** | **str** |  | [optional] 
**proto_value** | **Dict[str, object]** |  | [optional] 
**string_array** | [**EnterpriseCrmEventbusProtoStringArray**](EnterpriseCrmEventbusProtoStringArray.md) |  | [optional] 
**string_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_value_type import EnterpriseCrmEventbusProtoValueType

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoValueType from a JSON string
enterprise_crm_eventbus_proto_value_type_instance = EnterpriseCrmEventbusProtoValueType.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoValueType.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_value_type_dict = enterprise_crm_eventbus_proto_value_type_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoValueType from a dict
enterprise_crm_eventbus_proto_value_type_from_dict = EnterpriseCrmEventbusProtoValueType.from_dict(enterprise_crm_eventbus_proto_value_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


