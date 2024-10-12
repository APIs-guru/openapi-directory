# AzureReachabilityReportLatencyInfo

Details on latency for a time series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score** | **int** | The relative latency score between 1 and 100, higher values indicating a faster connection. | [optional] 
**time_stamp** | **datetime** | The time stamp. | [optional] 

## Example

```python
from openapi_client.models.azure_reachability_report_latency_info import AzureReachabilityReportLatencyInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AzureReachabilityReportLatencyInfo from a JSON string
azure_reachability_report_latency_info_instance = AzureReachabilityReportLatencyInfo.from_json(json)
# print the JSON string representation of the object
print(AzureReachabilityReportLatencyInfo.to_json())

# convert the object into a dict
azure_reachability_report_latency_info_dict = azure_reachability_report_latency_info_instance.to_dict()
# create an instance of AzureReachabilityReportLatencyInfo from a dict
azure_reachability_report_latency_info_from_dict = AzureReachabilityReportLatencyInfo.from_dict(azure_reachability_report_latency_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


