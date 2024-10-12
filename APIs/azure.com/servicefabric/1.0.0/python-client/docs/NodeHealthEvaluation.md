# NodeHealthEvaluation

The evaluation of the node health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_name** | **str** |  | [optional] 
**unhealthy_evaluations** | [**List[UnhealthyEvaluation]**](UnhealthyEvaluation.md) |  | [optional] 

## Example

```python
from openapi_client.models.node_health_evaluation import NodeHealthEvaluation

# TODO update the JSON string below
json = "{}"
# create an instance of NodeHealthEvaluation from a JSON string
node_health_evaluation_instance = NodeHealthEvaluation.from_json(json)
# print the JSON string representation of the object
print(NodeHealthEvaluation.to_json())

# convert the object into a dict
node_health_evaluation_dict = node_health_evaluation_instance.to_dict()
# create an instance of NodeHealthEvaluation from a dict
node_health_evaluation_from_dict = NodeHealthEvaluation.from_dict(node_health_evaluation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


