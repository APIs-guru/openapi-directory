# ShowUptimeMetricsHistoric200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**historic** | [**List[ShmHistoricMetrics]**](ShmHistoricMetrics.md) |  | 
**limits** | [**Limits1**](Limits1.md) |  | 

## Example

```python
from openapi_client.models.show_uptime_metrics_historic200_response import ShowUptimeMetricsHistoric200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ShowUptimeMetricsHistoric200Response from a JSON string
show_uptime_metrics_historic200_response_instance = ShowUptimeMetricsHistoric200Response.from_json(json)
# print the JSON string representation of the object
print(ShowUptimeMetricsHistoric200Response.to_json())

# convert the object into a dict
show_uptime_metrics_historic200_response_dict = show_uptime_metrics_historic200_response_instance.to_dict()
# create an instance of ShowUptimeMetricsHistoric200Response from a dict
show_uptime_metrics_historic200_response_from_dict = ShowUptimeMetricsHistoric200Response.from_dict(show_uptime_metrics_historic200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


