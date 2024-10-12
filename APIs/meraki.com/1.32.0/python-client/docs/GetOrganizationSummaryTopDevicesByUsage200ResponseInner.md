# GetOrganizationSummaryTopDevicesByUsage200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**clients** | [**GetOrganizationSummaryTopDevicesByUsage200ResponseInnerClients**](GetOrganizationSummaryTopDevicesByUsage200ResponseInnerClients.md) |  | [optional] 
**mac** | **str** | Mac address of the device | [optional] 
**model** | **str** | Model of the device | [optional] 
**name** | **str** | Name of the device | [optional] 
**network** | [**GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerNetwork**](GetOrganizationSummaryTopAppliancesByUtilization200ResponseInnerNetwork.md) |  | [optional] 
**product_type** | **str** | Product type of the device | [optional] 
**serial** | **str** | Serial number of the device | [optional] 
**usage** | [**GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage**](GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_devices_by_usage200_response_inner import GetOrganizationSummaryTopDevicesByUsage200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopDevicesByUsage200ResponseInner from a JSON string
get_organization_summary_top_devices_by_usage200_response_inner_instance = GetOrganizationSummaryTopDevicesByUsage200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopDevicesByUsage200ResponseInner.to_json())

# convert the object into a dict
get_organization_summary_top_devices_by_usage200_response_inner_dict = get_organization_summary_top_devices_by_usage200_response_inner_instance.to_dict()
# create an instance of GetOrganizationSummaryTopDevicesByUsage200ResponseInner from a dict
get_organization_summary_top_devices_by_usage200_response_inner_from_dict = GetOrganizationSummaryTopDevicesByUsage200ResponseInner.from_dict(get_organization_summary_top_devices_by_usage200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


