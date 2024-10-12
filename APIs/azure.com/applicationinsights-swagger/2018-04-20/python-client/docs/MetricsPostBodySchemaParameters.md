# MetricsPostBodySchemaParameters

The parameters for a single metrics query

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation** | **List[str]** | The aggregation to use when computing the metric values. To retrieve more than one aggregation at a time, separate them with a comma. If no aggregation is specified, then the default aggregation for the metric is used. | [optional] 
**filter** | **str** | An expression used to filter the results.  This value should be a valid OData filter expression where the keys of each clause should be applicable dimensions for the metric you are retrieving. | [optional] 
**interval** | **str** | The time interval to use when retrieving metric values. This is an ISO8601 duration. If interval is omitted, the metric value is aggregated across the entire timespan. If interval is supplied, the server may adjust the interval to a more appropriate size based on the timespan used for the query. In all cases, the actual interval used for the query is included in the response. | [optional] 
**metric_id** | [**MetricId**](MetricId.md) |  | 
**orderby** | **str** | The aggregation function and direction to sort the segments by.  This value is only valid when segment is specified. | [optional] 
**segment** | **List[str]** | The name of the dimension to segment the metric values by. This dimension must be applicable to the metric you are retrieving. To segment by more than one dimension at a time, separate them with a comma (,). In this case, the metric data will be segmented in the order the dimensions are listed in the parameter. | [optional] 
**timespan** | **str** | The timespan over which to retrieve metric values. This is an ISO8601 time period value. If timespan is omitted, a default time range of &#x60;PT12H&#x60; (\&quot;last 12 hours\&quot;) is used. The actual timespan that is queried may be adjusted by the server based. In all cases, the actual time span used for the query is included in the response. | [optional] 
**top** | **int** | The number of segments to return.  This value is only valid when segment is specified. | [optional] 

## Example

```python
from openapi_client.models.metrics_post_body_schema_parameters import MetricsPostBodySchemaParameters

# TODO update the JSON string below
json = "{}"
# create an instance of MetricsPostBodySchemaParameters from a JSON string
metrics_post_body_schema_parameters_instance = MetricsPostBodySchemaParameters.from_json(json)
# print the JSON string representation of the object
print(MetricsPostBodySchemaParameters.to_json())

# convert the object into a dict
metrics_post_body_schema_parameters_dict = metrics_post_body_schema_parameters_instance.to_dict()
# create an instance of MetricsPostBodySchemaParameters from a dict
metrics_post_body_schema_parameters_from_dict = MetricsPostBodySchemaParameters.from_dict(metrics_post_body_schema_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


