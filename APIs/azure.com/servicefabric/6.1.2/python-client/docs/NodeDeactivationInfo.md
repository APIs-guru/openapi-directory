# NodeDeactivationInfo

Information about the node deactivation. This information is valid for a node that is undergoing deactivation or has already been deactivated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deactivation_intent** | [**NodeDeactivationIntent**](NodeDeactivationIntent.md) |  | [optional] 
**node_deactivation_status** | [**NodeDeactivationStatus**](NodeDeactivationStatus.md) |  | [optional] 
**node_deactivation_task** | [**List[NodeDeactivationTask]**](NodeDeactivationTask.md) | List of tasks representing the deactivation operation on the node. | [optional] 
**pending_safety_checks** | [**List[SafetyCheckWrapper]**](SafetyCheckWrapper.md) | List of pending safety checks | [optional] 

## Example

```python
from openapi_client.models.node_deactivation_info import NodeDeactivationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NodeDeactivationInfo from a JSON string
node_deactivation_info_instance = NodeDeactivationInfo.from_json(json)
# print the JSON string representation of the object
print(NodeDeactivationInfo.to_json())

# convert the object into a dict
node_deactivation_info_dict = node_deactivation_info_instance.to_dict()
# create an instance of NodeDeactivationInfo from a dict
node_deactivation_info_from_dict = NodeDeactivationInfo.from_dict(node_deactivation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


