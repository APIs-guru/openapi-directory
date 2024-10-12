# CreateCell


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**h** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**using_view** | **str** | Makes a copy of the provided view. | [optional] 
**w** | **int** |  | [optional] 
**x** | **int** |  | [optional] 
**y** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.create_cell import CreateCell

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCell from a JSON string
create_cell_instance = CreateCell.from_json(json)
# print the JSON string representation of the object
print(CreateCell.to_json())

# convert the object into a dict
create_cell_dict = create_cell_instance.to_dict()
# create an instance of CreateCell from a dict
create_cell_from_dict = CreateCell.from_dict(create_cell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


