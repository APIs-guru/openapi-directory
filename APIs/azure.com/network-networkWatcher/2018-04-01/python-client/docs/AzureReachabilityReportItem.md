# AzureReachabilityReportItem

Azure reachability report details for a given provider location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_location** | **str** | The Azure region. | [optional] 
**latencies** | [**List[AzureReachabilityReportLatencyInfo]**](AzureReachabilityReportLatencyInfo.md) | List of latency details for each of the time series. | [optional] 
**provider** | **str** | The Internet service provider. | [optional] 

## Example

```python
from openapi_client.models.azure_reachability_report_item import AzureReachabilityReportItem

# TODO update the JSON string below
json = "{}"
# create an instance of AzureReachabilityReportItem from a JSON string
azure_reachability_report_item_instance = AzureReachabilityReportItem.from_json(json)
# print the JSON string representation of the object
print(AzureReachabilityReportItem.to_json())

# convert the object into a dict
azure_reachability_report_item_dict = azure_reachability_report_item_instance.to_dict()
# create an instance of AzureReachabilityReportItem from a dict
azure_reachability_report_item_from_dict = AzureReachabilityReportItem.from_dict(azure_reachability_report_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


