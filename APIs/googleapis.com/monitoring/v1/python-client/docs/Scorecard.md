# Scorecard

A widget showing the latest value of a metric, and how this value relates to one or more thresholds.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**blank_view** | **object** | A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }  | [optional] 
**gauge_view** | [**GaugeView**](GaugeView.md) |  | [optional] 
**spark_chart_view** | [**SparkChartView**](SparkChartView.md) |  | [optional] 
**thresholds** | [**List[Threshold]**](Threshold.md) | The thresholds used to determine the state of the scorecard given the time series&#39; current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.)As an example, consider a scorecard with the following four thresholds: { value: 90, category: &#39;DANGER&#39;, trigger: &#39;ABOVE&#39;, }, { value: 70, category: &#39;WARNING&#39;, trigger: &#39;ABOVE&#39;, }, { value: 10, category: &#39;DANGER&#39;, trigger: &#39;BELOW&#39;, }, { value: 20, category: &#39;WARNING&#39;, trigger: &#39;BELOW&#39;, } Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state. | [optional] 
**time_series_query** | [**TimeSeriesQuery**](TimeSeriesQuery.md) |  | [optional] 

## Example

```python
from openapi_client.models.scorecard import Scorecard

# TODO update the JSON string below
json = "{}"
# create an instance of Scorecard from a JSON string
scorecard_instance = Scorecard.from_json(json)
# print the JSON string representation of the object
print(Scorecard.to_json())

# convert the object into a dict
scorecard_dict = scorecard_instance.to_dict()
# create an instance of Scorecard from a dict
scorecard_from_dict = Scorecard.from_dict(scorecard_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


