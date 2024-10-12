# TableDataSet

Groups a time series query definition with table options.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**min_alignment_period** | **str** | Optional. The lower bound on data point frequency for this data set, implemented by specifying the minimum alignment period to use in a time series query For example, if the data is published once every 10 minutes, the min_alignment_period should be at least 10 minutes. It would not make sense to fetch and align data at one minute intervals. | [optional] 
**table_display_options** | [**TableDisplayOptions**](TableDisplayOptions.md) |  | [optional] 
**table_template** | **str** | Optional. A template string for naming TimeSeries in the resulting data set. This should be a string with interpolations of the form ${label_name}, which will resolve to the label&#39;s value i.e. \&quot;${resource.labels.project_id}.\&quot; | [optional] 
**time_series_query** | [**TimeSeriesQuery**](TimeSeriesQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.table_data_set import TableDataSet

# TODO update the JSON string below
json = "{}"
# create an instance of TableDataSet from a JSON string
table_data_set_instance = TableDataSet.from_json(json)
# print the JSON string representation of the object
print(TableDataSet.to_json())

# convert the object into a dict
table_data_set_dict = table_data_set_instance.to_dict()
# create an instance of TableDataSet from a dict
table_data_set_from_dict = TableDataSet.from_dict(table_data_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


