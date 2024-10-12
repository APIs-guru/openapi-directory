# AzureReachabilityReportParameters

Geographic and time constraints for Azure reachability report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azure_locations** | **List[str]** | Optional Azure regions to scope the query to. | [optional] 
**end_time** | **datetime** | The end time for the Azure reachability report. | 
**provider_location** | [**AzureReachabilityReportLocation**](AzureReachabilityReportLocation.md) |  | 
**providers** | **List[str]** | List of Internet service providers. | [optional] 
**start_time** | **datetime** | The start time for the Azure reachability report. | 

## Example

```python
from openapi_client.models.azure_reachability_report_parameters import AzureReachabilityReportParameters

# TODO update the JSON string below
json = "{}"
# create an instance of AzureReachabilityReportParameters from a JSON string
azure_reachability_report_parameters_instance = AzureReachabilityReportParameters.from_json(json)
# print the JSON string representation of the object
print(AzureReachabilityReportParameters.to_json())

# convert the object into a dict
azure_reachability_report_parameters_dict = azure_reachability_report_parameters_instance.to_dict()
# create an instance of AzureReachabilityReportParameters from a dict
azure_reachability_report_parameters_from_dict = AzureReachabilityReportParameters.from_dict(azure_reachability_report_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


