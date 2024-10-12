# BusinessCallsInsights

Insights for calls made to a location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_metrics** | [**AggregateMetrics**](AggregateMetrics.md) |  | [optional] 
**metric_type** | **str** | The metric for which the value applies. | [optional] 
**name** | **str** | Required. The resource name of the calls insights. Format: locations/{location}/businesscallsinsights | [optional] 

## Example

```python
from openapi_client.models.business_calls_insights import BusinessCallsInsights

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCallsInsights from a JSON string
business_calls_insights_instance = BusinessCallsInsights.from_json(json)
# print the JSON string representation of the object
print(BusinessCallsInsights.to_json())

# convert the object into a dict
business_calls_insights_dict = business_calls_insights_instance.to_dict()
# create an instance of BusinessCallsInsights from a dict
business_calls_insights_from_dict = BusinessCallsInsights.from_dict(business_calls_insights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


