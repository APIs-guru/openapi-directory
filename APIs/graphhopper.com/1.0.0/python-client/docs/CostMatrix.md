# CostMatrix


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CostMatrixData**](CostMatrixData.md) |  | [optional] 
**location_ids** | **List[str]** |  | [optional] 
**profile** | **str** | vehicle profile or empty if catch all fallback | [optional] 
**type** | **str** | type of cost matrix, currently default or google are supported | [optional] 

## Example

```python
from openapi_client.models.cost_matrix import CostMatrix

# TODO update the JSON string below
json = "{}"
# create an instance of CostMatrix from a JSON string
cost_matrix_instance = CostMatrix.from_json(json)
# print the JSON string representation of the object
print(CostMatrix.to_json())

# convert the object into a dict
cost_matrix_dict = cost_matrix_instance.to_dict()
# create an instance of CostMatrix from a dict
cost_matrix_from_dict = CostMatrix.from_dict(cost_matrix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


