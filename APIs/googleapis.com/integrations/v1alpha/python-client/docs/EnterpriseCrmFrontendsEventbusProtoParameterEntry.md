# EnterpriseCrmFrontendsEventbusProtoParameterEntry

Key-value pair of EventBus parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_type** | **str** | Explicitly getting the type of the parameter. | [optional] 
**key** | **str** | Key is used to retrieve the corresponding parameter value. This should be unique for a given fired event. These parameters must be predefined in the workflow definition. | [optional] 
**value** | [**EnterpriseCrmFrontendsEventbusProtoParameterValueType**](EnterpriseCrmFrontendsEventbusProtoParameterValueType.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_frontends_eventbus_proto_parameter_entry import EnterpriseCrmFrontendsEventbusProtoParameterEntry

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmFrontendsEventbusProtoParameterEntry from a JSON string
enterprise_crm_frontends_eventbus_proto_parameter_entry_instance = EnterpriseCrmFrontendsEventbusProtoParameterEntry.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmFrontendsEventbusProtoParameterEntry.to_json())

# convert the object into a dict
enterprise_crm_frontends_eventbus_proto_parameter_entry_dict = enterprise_crm_frontends_eventbus_proto_parameter_entry_instance.to_dict()
# create an instance of EnterpriseCrmFrontendsEventbusProtoParameterEntry from a dict
enterprise_crm_frontends_eventbus_proto_parameter_entry_from_dict = EnterpriseCrmFrontendsEventbusProtoParameterEntry.from_dict(enterprise_crm_frontends_eventbus_proto_parameter_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


