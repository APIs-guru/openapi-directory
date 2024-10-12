# CostMatrixData

JSON data of matrix response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**distances** | **List[List[float]]** |  | [optional] 
**info** | [**CostMatrixDataInfo**](CostMatrixDataInfo.md) |  | [optional] 
**times** | **List[List[int]]** |  | [optional] 

## Example

```python
from openapi_client.models.cost_matrix_data import CostMatrixData

# TODO update the JSON string below
json = "{}"
# create an instance of CostMatrixData from a JSON string
cost_matrix_data_instance = CostMatrixData.from_json(json)
# print the JSON string representation of the object
print(CostMatrixData.to_json())

# convert the object into a dict
cost_matrix_data_dict = cost_matrix_data_instance.to_dict()
# create an instance of CostMatrixData from a dict
cost_matrix_data_from_dict = CostMatrixData.from_dict(cost_matrix_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


