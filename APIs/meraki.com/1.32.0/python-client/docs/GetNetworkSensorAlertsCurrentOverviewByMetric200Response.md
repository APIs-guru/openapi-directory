# GetNetworkSensorAlertsCurrentOverviewByMetric200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**counts** | [**GetNetworkSensorAlertsCurrentOverviewByMetric200ResponseCounts**](GetNetworkSensorAlertsCurrentOverviewByMetric200ResponseCounts.md) |  | [optional] 
**supported_metrics** | **List[str]** | List of metrics that are supported for alerts, based on available sensor devices in the network | [optional] 

## Example

```python
from openapi_client.models.get_network_sensor_alerts_current_overview_by_metric200_response import GetNetworkSensorAlertsCurrentOverviewByMetric200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetNetworkSensorAlertsCurrentOverviewByMetric200Response from a JSON string
get_network_sensor_alerts_current_overview_by_metric200_response_instance = GetNetworkSensorAlertsCurrentOverviewByMetric200Response.from_json(json)
# print the JSON string representation of the object
print(GetNetworkSensorAlertsCurrentOverviewByMetric200Response.to_json())

# convert the object into a dict
get_network_sensor_alerts_current_overview_by_metric200_response_dict = get_network_sensor_alerts_current_overview_by_metric200_response_instance.to_dict()
# create an instance of GetNetworkSensorAlertsCurrentOverviewByMetric200Response from a dict
get_network_sensor_alerts_current_overview_by_metric200_response_from_dict = GetNetworkSensorAlertsCurrentOverviewByMetric200Response.from_dict(get_network_sensor_alerts_current_overview_by_metric200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


