# AddChartResponse

The result of adding a chart to a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart** | [**EmbeddedChart**](EmbeddedChart.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_chart_response import AddChartResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AddChartResponse from a JSON string
add_chart_response_instance = AddChartResponse.from_json(json)
# print the JSON string representation of the object
print(AddChartResponse.to_json())

# convert the object into a dict
add_chart_response_dict = add_chart_response_instance.to_dict()
# create an instance of AddChartResponse from a dict
add_chart_response_from_dict = AddChartResponse.from_dict(add_chart_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


