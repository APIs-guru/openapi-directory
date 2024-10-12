# EnterpriseCrmFrontendsEventbusProtoEventParameters

LINT.IfChange This message is used for processing and persisting (when applicable) key value pair parameters for each event in the event bus. Please see

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | [**List[EnterpriseCrmFrontendsEventbusProtoParameterEntry]**](EnterpriseCrmFrontendsEventbusProtoParameterEntry.md) | Parameters are a part of Event and can be used to communicate between different tasks that are part of the same workflow execution. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_event_parameters import EnterpriseCrmFrontendsEventbusProtoEventParameters

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoEventParameters from a JSON string
enterprise_crm_frontends_eventbus_proto_event_parameters_instance = EnterpriseCrmFrontendsEventbusProtoEventParameters.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoEventParameters.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_event_parameters_dict = enterprise_crm_frontends_eventbus_proto_event_parameters_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoEventParameters from a dict
enterprise_crm_frontends_eventbus_proto_event_parameters_from_dict = EnterpriseCrmFrontendsEventbusProtoEventParameters.from_dict(enterprise_crm_frontends_eventbus_proto_event_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


