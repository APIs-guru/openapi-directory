# GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage

Data usage of the device

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | **float** | Data usage of the device by percentage | [optional] 
**total** | **float** | Total data usage of the device | [optional] 

## Example

```python
from openapi_client.models.get_organization_summary_top_devices_by_usage200_response_inner_usage import GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage from a JSON string
get_organization_summary_top_devices_by_usage200_response_inner_usage_instance = GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage.from_json(json)
# print the JSON string representation of the object
print(GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage.to_json())

# convert the object into a dict
get_organization_summary_top_devices_by_usage200_response_inner_usage_dict = get_organization_summary_top_devices_by_usage200_response_inner_usage_instance.to_dict()
# create an instance of GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage from a dict
get_organization_summary_top_devices_by_usage200_response_inner_usage_from_dict = GetOrganizationSummaryTopDevicesByUsage200ResponseInnerUsage.from_dict(get_organization_summary_top_devices_by_usage200_response_inner_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


