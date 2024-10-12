# EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**EnterpriseCrmEventbusProtoAttributes**](EnterpriseCrmEventbusProtoAttributes.md) |  | [optional] 
**children** | [**List[EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.md) | Child parameters nested within this parameter. This field only applies to protobuf parameters | [optional] 
**data_type** | **str** | The data type of the parameter. | [optional] 
**default_value** | [**EnterpriseCrmFrontendsEventbusProtoParameterValueType**](EnterpriseCrmFrontendsEventbusProtoParameterValueType.md) |  | [optional] 
**in_out_type** | **str** | Specifies the input/output type for the parameter. | [optional] 
**is_transient** | **bool** | Whether this parameter is a transient parameter. | [optional] 
**json_schema** | **str** | This schema will be used to validate runtime JSON-typed values of this parameter. | [optional] 
**key** | **str** | Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition. | [optional] 
**name** | **str** | The name (without prefix) to be displayed in the UI for this parameter. E.g. if the key is \&quot;foo.bar.myName\&quot;, then the name would be \&quot;myName\&quot;. | [optional] 
**produced_by** | [**EnterpriseCrmEventbusProtoNodeIdentifier**](EnterpriseCrmEventbusProtoNodeIdentifier.md) |  | [optional] 
**producer** | **str** |  | [optional] 
**proto_def_name** | **str** | The name of the protobuf type if the parameter has a protobuf data type. | [optional] 
**proto_def_path** | **str** | If the data type is of type proto or proto array, this field needs to be populated with the fully qualified proto name. This message, for example, would be \&quot;enterprise.crm.frontends.eventbus.proto.WorkflowParameterEntry\&quot;. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_workflow_parameter_entry import EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry from a JSON string
enterprise_crm_frontends_eventbus_proto_workflow_parameter_entry_instance = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_workflow_parameter_entry_dict = enterprise_crm_frontends_eventbus_proto_workflow_parameter_entry_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry from a dict
enterprise_crm_frontends_eventbus_proto_workflow_parameter_entry_from_dict = EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.from_dict(enterprise_crm_frontends_eventbus_proto_workflow_parameter_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


