# GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mac** | **str** | Mac address of the appliance | [optional] 
**model** | **str** | Model of the appliance | [optional] 
**name** | **str** | Name of the appliance | [optional] 
**network** | [**GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerNetwork**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerNetwork.md) |  | [optional] 
**serial** | **str** | Serial number of the appliance | [optional] 
**utilization** | [**GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerUtilization**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerUtilization.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_appliances_by_utilization200_response_inner import GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner from a JSON string
get_organization_summary_top_appliances_by_utilization200_response_inner_instance = GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_appliances_by_utilization200_response_inner_dict = get_organization_summary_top_appliances_by_utilization200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner from a dict
get_organization_summary_top_appliances_by_utilization200_response_inner_from_dict = GetOrganizationSummaryTopAppliancesByUtilization200ResponseInner.from_dict(get_organization_summary_top_appliances_by_utilization200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


