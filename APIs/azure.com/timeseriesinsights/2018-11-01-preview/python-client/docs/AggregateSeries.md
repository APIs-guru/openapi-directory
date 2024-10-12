# AggregateSeries

Aggregate Series query. Allows to calculate an aggregated time series from events for a given Time Series ID and search span.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filter** | [**Tsx**](Tsx.md) |  | [optional] 
**inline_variables** | [**Dict[str, Variable]**](Variable.md) | This allows the user the optionally define inline-variables apart from the ones already defined in the model. When the inline variable names have the same name as the model, the inline variable definition takes precedence. Can be null. | [optional] 
**interval** | **str** | Interval size is specified in ISO-8601 duration format. All intervals are the same size. One month is always converted to 30 days, and one year is always 365 days. Examples: 1 minute is \&quot;PT1M\&quot;, 1 millisecond is \&quot;PT0.001S\&quot;. For more information, see https://www.w3.org/TR/xmlschema-2/#duration | 
**projected_variables** | **List[str]** | This allows the user to optionally select the variables that needs to be projected. When it is null or not set, all the variables from inlineVariables and model are returned. Can be null. | [optional] 
**search_span** | [**DateTimeRange**](DateTimeRange.md) |  | 
**time_series_id** | **List[object]** | A single Time Series ID value that is an array of primitive values that uniquely identifies a time series instance (e.g. a single device). Note that a single Time Series ID can be composite if multiple properties are specified as Time Series ID at environment creation time. The position and type of values must match Time Series ID properties specified on the environment and returned by Get Model Setting API. Cannot be empty. | 

## Example

```python
from openapi_client.models.aggregate_series import AggregateSeries

# TODO update the JSON string below
json = "{}"
# create an instance of AggregateSeries from a JSON string
aggregate_series_instance = AggregateSeries.from_json(json)
# print the JSON string representation of the object
print(AggregateSeries.to_json())

# convert the object into a dict
aggregate_series_dict = aggregate_series_instance.to_dict()
# create an instance of AggregateSeries from a dict
aggregate_series_from_dict = AggregateSeries.from_dict(aggregate_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


