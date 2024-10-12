# EnterpriseCrmEventbusProtoNodeIdentifier

Represents a node identifier (type + id). Next highest id: 3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**element_identifier** | **str** | Configuration of the edge. | [optional] 
**element_type** | **str** | Destination node where the edge ends. It can only be a task config. | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_node_identifier import EnterpriseCrmEventbusProtoNodeIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoNodeIdentifier from a JSON string
enterprise_crm_eventbus_proto_node_identifier_instance = EnterpriseCrmEventbusProtoNodeIdentifier.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoNodeIdentifier.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_node_identifier_dict = enterprise_crm_eventbus_proto_node_identifier_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoNodeIdentifier from a dict
enterprise_crm_eventbus_proto_node_identifier_from_dict = EnterpriseCrmEventbusProtoNodeIdentifier.from_dict(enterprise_crm_eventbus_proto_node_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


