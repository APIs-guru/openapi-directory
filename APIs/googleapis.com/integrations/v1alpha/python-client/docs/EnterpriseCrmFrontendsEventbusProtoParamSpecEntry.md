# EnterpriseCrmFrontendsEventbusProtoParamSpecEntry

Key-value pair of EventBus task parameters. Next id: 13

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**class_name** | **str** | The FQCN of the Java object this represents. A string, for example, would be \&quot;java.lang.String\&quot;. If this is \&quot;java.lang.Object\&quot;, the parameter can be of any type. | [optional] 
**collection_element_class_name** | **str** | If it is a collection of objects, this would be the FCQN of every individual element in the collection. If this is \&quot;java.lang.Object\&quot;, the parameter is a collection of any type. | [optional] 
**config** | [**EnterpriseCrmEventbusProtoParamSpecEntryConfig**](EnterpriseCrmEventbusProtoParamSpecEntryConfig.md) |  | [optional] 
**data_type** | **str** | The data type of the parameter. | [optional] 
**default_value** | [**EnterpriseCrmFrontendsEventbusProtoParameterValueType**](EnterpriseCrmFrontendsEventbusProtoParameterValueType.md) |  | [optional] 
**is_deprecated** | **bool** | If set, this entry is deprecated, so further use of this parameter should be prohibited. | [optional] 
**is_output** | **bool** |  | [optional] 
**json_schema** | **str** | If the data_type is JSON_VALUE, then this will define its schema. | [optional] 
**key** | **str** | Key is used to retrieve the corresponding parameter value. This should be unique for a given task. These parameters must be predefined in the workflow definition. | [optional] 
**proto_def** | [**EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition**](EnterpriseCrmEventbusProtoParamSpecEntryProtoDefinition.md) |  | [optional] 
**required** | **bool** | If set, the user must provide an input value for this parameter. | [optional] 
**validation_rule** | [**EnterpriseCrmEventbusProtoParamSpecEntryValidationRule**](EnterpriseCrmEventbusProtoParamSpecEntryValidationRule.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_param_spec_entry import EnterpriseCrmFrontendsEventbusProtoParamSpecEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoParamSpecEntry from a JSON string
enterprise_crm_frontends_eventbus_proto_param_spec_entry_instance = EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_param_spec_entry_dict = enterprise_crm_frontends_eventbus_proto_param_spec_entry_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoParamSpecEntry from a dict
enterprise_crm_frontends_eventbus_proto_param_spec_entry_from_dict = EnterpriseCrmFrontendsEventbusProtoParamSpecEntry.from_dict(enterprise_crm_frontends_eventbus_proto_param_spec_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


