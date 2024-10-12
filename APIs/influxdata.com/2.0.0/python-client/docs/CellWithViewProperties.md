# CellWithViewProperties


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**h** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**CellLinks**](CellLinks.md) |  | [optional] 
**view_id** | **str** | The reference to a view from the views API. | [optional] 
**w** | **int** |  | [optional] 
**x** | **int** |  | [optional] 
**y** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**properties** | [**ViewProperties**](ViewProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.cell_with_view_properties import CellWithViewProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CellWithViewProperties from a JSON string
cell_with_view_properties_instance = CellWithViewProperties.from_json(json)
# print the JSON string representation of the object
print(CellWithViewProperties.to_json())

# convert the object into a dict
cell_with_view_properties_dict = cell_with_view_properties_instance.to_dict()
# create an instance of CellWithViewProperties from a dict
cell_with_view_properties_from_dict = CellWithViewProperties.from_dict(cell_with_view_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


