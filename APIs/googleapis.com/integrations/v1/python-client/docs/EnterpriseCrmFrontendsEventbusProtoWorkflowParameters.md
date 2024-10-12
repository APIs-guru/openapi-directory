# EnterpriseCrmFrontendsEventbusProtoWorkflowParameters

LINT.IfChange This is the frontend version of WorkflowParameters. It's exactly like the backend version except that instead of flattening protobuf parameters and treating every field and subfield of a protobuf parameter as a separate parameter, the fields/subfields of a protobuf parameter will be nested as \"children\" (see 'children' field below) parameters of the parent parameter. Please refer to enterprise/crm/eventbus/proto/workflow_parameters.proto for more information about WorkflowParameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoWorkflowParameterEntry.md) | Parameters are a part of Event and can be used to communiticate between different tasks that are part of the same workflow execution. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_workflow_parameters import EnterpriseCrmFrontendsEventbusProtoWorkflowParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoWorkflowParameters from a JSON string
enterprise_crm_frontends_eventbus_proto_workflow_parameters_instance = EnterpriseCrmFrontendsEventbusProtoWorkflowParameters.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoWorkflowParameters.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_workflow_parameters_dict = enterprise_crm_frontends_eventbus_proto_workflow_parameters_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoWorkflowParameters from a dict
enterprise_crm_frontends_eventbus_proto_workflow_parameters_from_dict = EnterpriseCrmFrontendsEventbusProtoWorkflowParameters.from_dict(enterprise_crm_frontends_eventbus_proto_workflow_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


