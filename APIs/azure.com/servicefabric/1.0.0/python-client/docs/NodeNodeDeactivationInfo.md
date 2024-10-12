# NodeNodeDeactivationInfo

The info of the deactivation info

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_deactivation_intent** | **str** |  | [optional] 
**node_deactivation_status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.node_node_deactivation_info import NodeNodeDeactivationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NodeNodeDeactivationInfo from a JSON string
node_node_deactivation_info_instance = NodeNodeDeactivationInfo.from_json(json)
# print the JSON string representation of the object
print(NodeNodeDeactivationInfo.to_json())

# convert the object into a dict
node_node_deactivation_info_dict = node_node_deactivation_info_instance.to_dict()
# create an instance of NodeNodeDeactivationInfo from a dict
node_node_deactivation_info_from_dict = NodeNodeDeactivationInfo.from_dict(node_node_deactivation_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


