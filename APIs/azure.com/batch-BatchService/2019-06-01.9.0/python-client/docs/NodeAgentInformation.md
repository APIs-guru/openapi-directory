# NodeAgentInformation

The Batch Compute Node agent is a program that runs on each Compute Node in the Pool and provides Batch capability on the Compute Node.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **datetime** | This is the most recent time that the Compute Node agent was updated to a new version. | 
**version** | **str** | This version number can be checked against the Compute Node agent release notes located at https://github.com/Azure/Batch/blob/master/changelogs/nodeagent/CHANGELOG.md. | 

## Example

```python
from openapi_client.models.node_agent_information import NodeAgentInformation

# TODO update the JSON string below
json = "{}"
# create an instance of NodeAgentInformation from a JSON string
node_agent_information_instance = NodeAgentInformation.from_json(json)
# print the JSON string representation of the object
print(NodeAgentInformation.to_json())

# convert the object into a dict
node_agent_information_dict = node_agent_information_instance.to_dict()
# create an instance of NodeAgentInformation from a dict
node_agent_information_from_dict = NodeAgentInformation.from_dict(node_agent_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


