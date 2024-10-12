# ShowUptimeMetricsCurrent200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | [**ShmMetrics**](ShmMetrics.md) |  | 
**limits** | [**Limits**](Limits.md) |  | 

## Example

```python
from openapi_client.models.show_uptime_metrics_current200_response import ShowUptimeMetricsCurrent200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ShowUptimeMetricsCurrent200Response from a JSON string
show_uptime_metrics_current200_response_instance = ShowUptimeMetricsCurrent200Response.from_json(json)
# print the JSON string representation of the object
print(ShowUptimeMetricsCurrent200Response.to_json())

# convert the object into a dict
show_uptime_metrics_current200_response_dict = show_uptime_metrics_current200_response_instance.to_dict()
# create an instance of ShowUptimeMetricsCurrent200Response from a dict
show_uptime_metrics_current200_response_from_dict = ShowUptimeMetricsCurrent200Response.from_dict(show_uptime_metrics_current200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


