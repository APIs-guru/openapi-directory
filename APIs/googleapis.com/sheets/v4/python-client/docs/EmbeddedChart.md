# EmbeddedChart

A chart embedded in a sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**border** | [**EmbeddedObjectBorder**](EmbeddedObjectBorder.md) |  | [optional] 
**chart_id** | **int** | The ID of the chart. | [optional] 
**position** | [**EmbeddedObjectPosition**](EmbeddedObjectPosition.md) |  | [optional] 
**spec** | [**ChartSpec**](ChartSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.embedded_chart import EmbeddedChart

# TODO update the JSON string below
json = "{}"
# create an instance of EmbeddedChart from a JSON string
embedded_chart_instance = EmbeddedChart.from_json(json)
# print the JSON string representation of the object
print(EmbeddedChart.to_json())

# convert the object into a dict
embedded_chart_dict = embedded_chart_instance.to_dict()
# create an instance of EmbeddedChart from a dict
embedded_chart_from_dict = EmbeddedChart.from_dict(embedded_chart_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


