# NodeUpgradeProgressInfo

Information about the upgrading node and its status

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_name** | **str** | The name of a Service Fabric node. | [optional] 
**pending_safety_checks** | [**List[SafetyCheckWrapper]**](SafetyCheckWrapper.md) | List of pending safety checks | [optional] 
**upgrade_phase** | [**NodeUpgradePhase**](NodeUpgradePhase.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_upgrade_progress_info import NodeUpgradeProgressInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NodeUpgradeProgressInfo from a JSON string
node_upgrade_progress_info_instance = NodeUpgradeProgressInfo.from_json(json)
# print the JSON string representation of the object
print(NodeUpgradeProgressInfo.to_json())

# convert the object into a dict
node_upgrade_progress_info_dict = node_upgrade_progress_info_instance.to_dict()
# create an instance of NodeUpgradeProgressInfo from a dict
node_upgrade_progress_info_from_dict = NodeUpgradeProgressInfo.from_dict(node_upgrade_progress_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


