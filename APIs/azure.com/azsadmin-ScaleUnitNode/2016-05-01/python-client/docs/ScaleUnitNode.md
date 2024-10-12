# ScaleUnitNode

The physical server in a cluster.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ScaleUnitNodeModel**](ScaleUnitNodeModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.scale_unit_node import ScaleUnitNode

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnitNode from a JSON string
scale_unit_node_instance = ScaleUnitNode.from_json(json)
# print the JSON string representation of the object
print(ScaleUnitNode.to_json())

# convert the object into a dict
scale_unit_node_dict = scale_unit_node_instance.to_dict()
# create an instance of ScaleUnitNode from a dict
scale_unit_node_from_dict = ScaleUnitNode.from_dict(scale_unit_node_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


