# ScaleUnitModel

Properties of a scale unit.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_multi_node** | **bool** | Denotes if more than one node in cluster. | [optional] 
**logical_fault_domain** | **int** | Fault domain name of the cluster. | [optional] 
**model** | **str** | Model of the servers in the cluster. | [optional] 
**nodes** | **List[str]** | List of nodes in the server. | [optional] 
**scale_unit_type** | **str** | Type of cluster. | [optional] 
**state** | **str** | Current state of the cluster. | [optional] 
**total_capacity** | [**ScaleUnitCapacity**](ScaleUnitCapacity.md) |  | [optional] 

## Example

```python
from openapi_client.models.scale_unit_model import ScaleUnitModel

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnitModel from a JSON string
scale_unit_model_instance = ScaleUnitModel.from_json(json)
# print the JSON string representation of the object
print(ScaleUnitModel.to_json())

# convert the object into a dict
scale_unit_model_dict = scale_unit_model_instance.to_dict()
# create an instance of ScaleUnitModel from a dict
scale_unit_model_from_dict = ScaleUnitModel.from_dict(scale_unit_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


