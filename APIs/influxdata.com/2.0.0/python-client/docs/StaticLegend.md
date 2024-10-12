# StaticLegend

StaticLegend represents the options specific to the static legend

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**colorize_rows** | **bool** |  | [optional] 
**height_ratio** | **float** |  | [optional] 
**hide** | **bool** |  | [optional] 
**opacity** | **float** |  | [optional] 
**orientation_threshold** | **int** |  | [optional] 
**value_axis** | **str** |  | [optional] 
**width_ratio** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.static_legend import StaticLegend

# TODO update the JSON string below
json = "{}"
# create an instance of StaticLegend from a JSON string
static_legend_instance = StaticLegend.from_json(json)
# print the JSON string representation of the object
print(StaticLegend.to_json())

# convert the object into a dict
static_legend_dict = static_legend_instance.to_dict()
# create an instance of StaticLegend from a dict
static_legend_from_dict = StaticLegend.from_dict(static_legend_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


