# CostMatrixDataInfo

Additional information for your request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyrights** | **List[str]** |  | [optional] 
**took** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.cost_matrix_data_info import CostMatrixDataInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CostMatrixDataInfo from a JSON string
cost_matrix_data_info_instance = CostMatrixDataInfo.from_json(json)
# print the JSON string representation of the object
print(CostMatrixDataInfo.to_json())

# convert the object into a dict
cost_matrix_data_info_dict = cost_matrix_data_info_instance.to_dict()
# create an instance of CostMatrixDataInfo from a dict
cost_matrix_data_info_from_dict = CostMatrixDataInfo.from_dict(cost_matrix_data_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


