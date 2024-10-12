# UpdateChartSpecRequest

Updates a chart's specifications. (This does not move or resize a chart. To move or resize a chart, use UpdateEmbeddedObjectPositionRequest.)

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chart_id** | **int** | The ID of the chart to update. | [optional] 
**spec** | [**ChartSpec**](ChartSpec.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_chart_spec_request import UpdateChartSpecRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateChartSpecRequest from a JSON string
update_chart_spec_request_instance = UpdateChartSpecRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateChartSpecRequest.to_json())

# convert the object into a dict
update_chart_spec_request_dict = update_chart_spec_request_instance.to_dict()
# create an instance of UpdateChartSpecRequest from a dict
update_chart_spec_request_from_dict = UpdateChartSpecRequest.from_dict(update_chart_spec_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


