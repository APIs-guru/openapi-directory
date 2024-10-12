# ConnectAgentResource

ConnectAgentResource represents a Kubernetes resource manifest for Connect Agent deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**manifest** | **str** | YAML manifest of the resource. | [optional] 
**type** | [**TypeMeta**](TypeMeta.md) |  | [optional] 

## Example

```python
from openapi_client.models.connect_agent_resource import ConnectAgentResource

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectAgentResource from a JSON string
connect_agent_resource_instance = ConnectAgentResource.from_json(json)
# print the JSON string representation of the object
print(ConnectAgentResource.to_json())

# convert the object into a dict
connect_agent_resource_dict = connect_agent_resource_instance.to_dict()
# create an instance of ConnectAgentResource from a dict
connect_agent_resource_from_dict = ConnectAgentResource.from_dict(connect_agent_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


