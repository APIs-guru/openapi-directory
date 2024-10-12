# RestartNodeDescription

Describes the parameters to restart a Service Fabric node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_fabric_dump** | **str** | Specify True to create a dump of the fabric node process. This is case-sensitive. | [optional] [default to 'False']
**node_instance_id** | **str** | The instance ID of the target node. If instance ID is specified the node is restarted only if it matches with the current instance of the node. A default value of \&quot;0\&quot; would match any instance ID. The instance ID can be obtained using get node query. | [default to '0']

## Example

```python
from openapi_client.models.restart_node_description import RestartNodeDescription

# TODO update the JSON string below
json = "{}"
# create an instance of RestartNodeDescription from a JSON string
restart_node_description_instance = RestartNodeDescription.from_json(json)
# print the JSON string representation of the object
print(RestartNodeDescription.to_json())

# convert the object into a dict
restart_node_description_dict = restart_node_description_instance.to_dict()
# create an instance of RestartNodeDescription from a dict
restart_node_description_from_dict = RestartNodeDescription.from_dict(restart_node_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


