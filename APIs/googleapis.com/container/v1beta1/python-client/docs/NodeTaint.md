# NodeTaint

Kubernetes taint is composed of three fields: key, value, and effect. Effect can only be one of three types: NoSchedule, PreferNoSchedule or NoExecute. See [here](https://kubernetes.io/docs/concepts/configuration/taint-and-toleration) for more information, including usage and the valid values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effect** | **str** | Effect for taint. | [optional] 
**key** | **str** | Key for taint. | [optional] 
**value** | **str** | Value for taint. | [optional] 

## Example

```python
from openapi_client.models.node_taint import NodeTaint

# TODO update the JSON string below
json = "{}"
# create an instance of NodeTaint from a JSON string
node_taint_instance = NodeTaint.from_json(json)
# print the JSON string representation of the object
print(NodeTaint.to_json())

# convert the object into a dict
node_taint_dict = node_taint_instance.to_dict()
# create an instance of NodeTaint from a dict
node_taint_from_dict = NodeTaint.from_dict(node_taint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


