# EnterpriseCrmEventbusProtoField

Information about the value and type of the field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cardinality** | **str** | By default, if the cardinality is unspecified the field is considered required while mapping. | [optional] 
**default_value** | [**EnterpriseCrmEventbusProtoParameterValueType**](EnterpriseCrmEventbusProtoParameterValueType.md) |  | [optional] 
**field_type** | **str** | Specifies the data type of the field. | [optional] 
**proto_def_path** | **str** | Optional. The fully qualified proto name (e.g. enterprise.crm.storage.Account). Required for output field of type PROTO_VALUE or PROTO_ARRAY. For e.g., if input field_type is BYTES and output field_type is PROTO_VALUE, then fully qualified proto type url should be provided to parse the input bytes. If field_type is *_ARRAY, then all the converted protos are of the same type. | [optional] 
**reference_key** | **str** | This holds the reference key of the workflow or task parameter. 1. Any workflow parameter, for e.g. $workflowParam1$. 2. Any task input or output parameter, for e.g. $task1_param1$. 3. Any workflow or task parameters with subfield references, for e.g., $task1_param1.employee.id$ | [optional] 
**transform_expression** | [**EnterpriseCrmEventbusProtoTransformExpression**](EnterpriseCrmEventbusProtoTransformExpression.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_field import EnterpriseCrmEventbusProtoField

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoField from a JSON string
enterprise_crm_eventbus_proto_field_instance = EnterpriseCrmEventbusProtoField.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoField.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_field_dict = enterprise_crm_eventbus_proto_field_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoField from a dict
enterprise_crm_eventbus_proto_field_from_dict = EnterpriseCrmEventbusProtoField.from_dict(enterprise_crm_eventbus_proto_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


