# CellUpdate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**h** | **int** |  | [optional] 
**w** | **int** |  | [optional] 
**x** | **int** |  | [optional] 
**y** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.cell_update import CellUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of CellUpdate from a JSON string
cell_update_instance = CellUpdate.from_json(json)
# print the JSON string representation of the object
print(CellUpdate.to_json())

# convert the object into a dict
cell_update_dict = cell_update_instance.to_dict()
# create an instance of CellUpdate from a dict
cell_update_from_dict = CellUpdate.from_dict(cell_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


