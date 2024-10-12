# AzureReachabilityReport

Azure reachability report details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregation_level** | **str** | The aggregation level of Azure reachability report. Can be Country, State or City. | 
**provider_location** | [**AzureReachabilityReportLocation**](AzureReachabilityReportLocation.md) |  | 
**reachability_report** | [**List[AzureReachabilityReportItem]**](AzureReachabilityReportItem.md) | List of Azure reachability report items. | 

## Example

```python
from openapi_client.models.azure_reachability_report import AzureReachabilityReport

# TODO update the JSON string below
json = "{}"
# create an instance of AzureReachabilityReport from a JSON string
azure_reachability_report_instance = AzureReachabilityReport.from_json(json)
# print the JSON string representation of the object
print(AzureReachabilityReport.to_json())

# convert the object into a dict
azure_reachability_report_dict = azure_reachability_report_instance.to_dict()
# create an instance of AzureReachabilityReport from a dict
azure_reachability_report_from_dict = AzureReachabilityReport.from_dict(azure_reachability_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


