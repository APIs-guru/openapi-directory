# DataSourceChartProperties

Properties of a data source chart.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_execution_status** | [**DataExecutionStatus**](DataExecutionStatus.md) |  | [optional] 
**data_source_id** | **str** | ID of the data source that the chart is associated with. | [optional] 

## Example

```python
from openapi_client.models.data_source_chart_properties import DataSourceChartProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataSourceChartProperties from a JSON string
data_source_chart_properties_instance = DataSourceChartProperties.from_json(json)
# print the JSON string representation of the object
print(DataSourceChartProperties.to_json())

# convert the object into a dict
data_source_chart_properties_dict = data_source_chart_properties_instance.to_dict()
# create an instance of DataSourceChartProperties from a dict
data_source_chart_properties_from_dict = DataSourceChartProperties.from_dict(data_source_chart_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


