# GridLayout

A basic layout divides the available space into vertical columns of equal width and arranges a list of widgets using a row-first strategy.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **str** | The number of columns into which the view&#39;s width is divided. If omitted or set to zero, a system default will be used while rendering. | [optional] 
**widgets** | [**List[Widget]**](Widget.md) | The informational elements that are arranged into the columns row-first. | [optional] 

## Example

```python
from openapi_client.models.grid_layout import GridLayout

# TODO update the JSON string below
json = "{}"
# create an instance of GridLayout from a JSON string
grid_layout_instance = GridLayout.from_json(json)
# print the JSON string representation of the object
print(GridLayout.to_json())

# convert the object into a dict
grid_layout_dict = grid_layout_instance.to_dict()
# create an instance of GridLayout from a dict
grid_layout_from_dict = GridLayout.from_dict(grid_layout_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


