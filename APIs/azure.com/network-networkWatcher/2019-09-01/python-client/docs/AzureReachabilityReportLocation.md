# AzureReachabilityReportLocation

Parameters that define a geographic location.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | The name of the city or town. | [optional] 
**country** | **str** | The name of the country. | 
**state** | **str** | The name of the state. | [optional] 

## Example

```python
from openapi_client.models.azure_reachability_report_location import AzureReachabilityReportLocation

# TODO update the JSON string below
json = "{}"
# create an instance of AzureReachabilityReportLocation from a JSON string
azure_reachability_report_location_instance = AzureReachabilityReportLocation.from_json(json)
# print the JSON string representation of the object
print(AzureReachabilityReportLocation.to_json())

# convert the object into a dict
azure_reachability_report_location_dict = azure_reachability_report_location_instance.to_dict()
# create an instance of AzureReachabilityReportLocation from a dict
azure_reachability_report_location_from_dict = AzureReachabilityReportLocation.from_dict(azure_reachability_report_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


