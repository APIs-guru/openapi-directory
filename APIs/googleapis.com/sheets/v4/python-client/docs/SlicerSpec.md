# SlicerSpec

The specifications of a slicer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apply_to_pivot_tables** | **bool** | True if the filter should apply to pivot tables. If not set, default to &#x60;True&#x60;. | [optional] 
**background_color** | [**Color**](Color.md) |  | [optional] 
**background_color_style** | [**ColorStyle**](ColorStyle.md) |  | [optional] 
**column_index** | **int** | The zero-based column index in the data table on which the filter is applied to. | [optional] 
**data_range** | [**GridRange**](GridRange.md) |  | [optional] 
**filter_criteria** | [**FilterCriteria**](FilterCriteria.md) |  | [optional] 
**horizontal_alignment** | **str** | The horizontal alignment of title in the slicer. If unspecified, defaults to &#x60;LEFT&#x60; | [optional] 
**text_format** | [**TextFormat**](TextFormat.md) |  | [optional] 
**title** | **str** | The title of the slicer. | [optional] 

## Example

```python
from openapi_client.models.slicer_spec import SlicerSpec

# TODO update the JSON string below
json = "{}"
# create an instance of SlicerSpec from a JSON string
slicer_spec_instance = SlicerSpec.from_json(json)
# print the JSON string representation of the object
print(SlicerSpec.to_json())

# convert the object into a dict
slicer_spec_dict = slicer_spec_instance.to_dict()
# create an instance of SlicerSpec from a dict
slicer_spec_from_dict = SlicerSpec.from_dict(slicer_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


